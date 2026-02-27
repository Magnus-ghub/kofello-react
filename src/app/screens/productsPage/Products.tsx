import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import RedButton from "../../context/RedButton";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";
import { ProductCollection } from "../../../lib/enums/product.enum";
import ProductService from "../../services/ProductService";
import { serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";
import { createSelector } from "reselect";

const SORT_OPTIONS = [
  { value: "createdAt", label: "New", icon: <AccessTimeIcon fontSize="small" /> },
  { value: "productPrice", label: "Price", icon: <AttachMoneyIcon fontSize="small" /> },
  { value: "productViews", label: "Views", icon: <VisibilityIcon fontSize="small" /> },
];

const actionDispatch = (dispatch: any) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.COFFEE,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product.getProducts(productSearch).then(setProducts).catch(console.log);
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  const searchCollectionHandler = (collection: ProductCollection) => {
    setProductSearch({ ...productSearch, page: 1, productCollection: collection });
  };
  const serchOrderHandler = (order: string) => {
    setProductSearch({ ...productSearch, page: 1, order });
  };
  const searchProductHandler = () => {
    setProductSearch({ ...productSearch, search: searchText });
  };
  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    setProductSearch({ ...productSearch, page: value });
  };
  const choseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products-page">
      <div className="products">
        <Container>
          <div className="avatar-big-box">
            <div className="top-text">
              <p>Seasonal Drinks & Desserts</p>
              <div className="single-search-big-box">
                <div className="input-with-button">
                  <input
                    type="search"
                    className="single-search-input"
                    placeholder="Type here"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && searchProductHandler()}
                  />
                  <Button className="single-button-search" variant="contained" onClick={searchProductHandler}>
                    <SearchIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Categorylar */}
          <div className="product-category">
            <div className="category-main">
              <div className="category-btns">
                <RedButton label="Coffee" active={productSearch.productCollection === ProductCollection.COFFEE} onClick={() => searchCollectionHandler(ProductCollection.COFFEE)} />
                <RedButton label="Latte" active={productSearch.productCollection === ProductCollection.LATTE} onClick={() => searchCollectionHandler(ProductCollection.LATTE)} />
                <RedButton label="Tea" active={productSearch.productCollection === ProductCollection.TEA} onClick={() => searchCollectionHandler(ProductCollection.TEA)} />
                <RedButton label="Ade/Juice" active={productSearch.productCollection === ProductCollection.ADE_JUICE} onClick={() => searchCollectionHandler(ProductCollection.ADE_JUICE)} />
                <RedButton label="Smoothie" active={productSearch.productCollection === ProductCollection.SMOOTHIE} onClick={() => searchCollectionHandler(ProductCollection.SMOOTHIE)} />
                <RedButton label="Bottle" active={productSearch.productCollection === ProductCollection.BOTTLE} onClick={() => searchCollectionHandler(ProductCollection.BOTTLE)} />
                <RedButton label="Bakery" active={productSearch.productCollection === ProductCollection.BAKERY} onClick={() => searchCollectionHandler(ProductCollection.BAKERY)} />
                <RedButton label="MD" active={productSearch.productCollection === ProductCollection.MD_PICKS} onClick={() => searchCollectionHandler(ProductCollection.MD_PICKS)} />
              </div>
            </div>
          </div>

          {/* Filter har doim o‘ngda */}
          <div className="dishes-filter-section">
            <div className="dishes-filter-box">
              <span className="dishes-filter-label">Sort by</span>
              <div className="sort-segmented">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    className={`sort-seg-btn ${productSearch.order === opt.value ? "active" : ""}`}
                    onClick={() => serchOrderHandler(opt.value)}
                  >
                    {opt.icon}
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Productlar */}
          <div className="list-category-section">
            <div className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.BAKERY
                      ? product.productSize
                      : product.productCollection === ProductCollection.MD_PICKS
                      ? undefined
                      : product.productTemperature;
                  return (
                    <div key={product._id} className="product-card" onClick={() => choseDishHandler(product._id)}>
                      <div className="product-img" style={{ backgroundImage: `url(${imagePath})` }}>
                        {sizeVolume && <div className="product-sale">{sizeVolume}</div>}
                        <Button
                          className="shop-btn"
                          onClick={e => {
                            onAdd({
                              _id: product._id,
                              quantity: 1,
                              name: product.productName,
                              price: product.productPrice,
                              image: product.productImages[0],
                            });
                            e.stopPropagation();
                          }}
                        >
                          <img src={"/icons/shopping-cart.svg"} style={{ display: "flex" }} />
                        </Button>
                        <Button className="view-btn" style={{ right: "36px" }}>
                          <Badge badgeContent={product.productViews} color="secondary">
                            <RemoveRedEyeIcon sx={{ color: product.productViews === 0 ? "gray" : "white" }} />
                          </Badge>
                        </Button>
                      </div>
                      <Box className="product-desc">
                        <span className="product-title">{product.productName}</span>
                        <div className="product-desc">{product.productPrice} ₩</div>
                      </Box>
                    </div>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination-section">
            <Pagination
              count={products.length !== 0 ? productSearch.page + 1 : productSearch.page}
              page={productSearch.page}
              renderItem={item => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={paginationHandler}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}