import { Box, Button, Container, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { setProducts } from "./slice";
import { defaultFormat } from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(
  retrieveProducts, (products) => ({ 
    products,
}));

export default function Products() {
    const { setProducts } = actionDispatch(useDispatch());
    const { products } = useSelector(productsRetriever);

    useEffect(() => {
        const product = new ProductService();
        product
          .getProducts({
            page: 1,
            limit: 8,
            order: "createdAt",
            productCollection: ProductCollection.DISH,
            search: "",
          })
          .then((data) => setProducts(data))
          .catch((err) => console.log(err));
    })



    return(
        <div className="products">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"avatar-big-box"}>
                        <Stack className={"top-text"}>
                            <Box>
                                <p>Burak Restaurant</p>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #ccc',
                                    borderRadius: '20px',
                                    padding: '2px 8px',
                                    width: '300px',
                                    backgroundColor: '#fff',
                                }}
                            >
                                { <InputBase
                                    placeholder="Type here"
                                    sx={{ ml: 1, flex: 1 }}
                                /> }
                                <Button
                                    
                                    variant="contained"
                                    sx={{
                                    borderRadius: '20px',
                                    textTransform: 'none',
                                    padding: '6px 16px',
                                    backgroundColor: '#333',
                                    '&:hover': {
                                        backgroundColor: '#555',
                                    }
                                    }}
                                    startIcon={<SearchIcon />}
                                >
                                    Search
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>

                    <Stack className={"dishes-filter-section"}>
                        <Stack className={"dishes-filter-box"}>
                            <Button
                              variant={"contained"}
                              color={"primary"}
                              className={"order"}
                            >
                                New
                            </Button>
                            <Button
                              variant={"contained"}
                              color={"primary"}
                              className={"order"}
                            >
                                Price
                            </Button>
                            <Button
                              variant={"contained"}
                              color={"secondary"}
                              className={"order"}
                            >
                                Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"list-category-section"}>
                        <Stack className={"product-category"}>
                            <div className={"category-main"} >
                                <Button variant={"contained"} color={"secondary"}>
                                    Other
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Dessert
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Drink
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Salad
                                </Button>
                                <Button variant={"contained"} color={"primary"}>
                                    Dish
                                </Button>
                            </div>
                        </Stack>

                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product: Product) => {
                                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                                    const sizeVolume = 
                                        product.productCollection === ProductCollection.DRINK 
                                          ? product.productVolume + " litre " 
                                          : product.productSize + "size ";
                                    return (
                                        <Stack key={product._id} className={"product-card"}>
                                            <Stack
                                             className={"product-img"}
                                             sx={{
                                                backgroundImage: `url(${imagePath})`
                                             }}
                                            >
                                                <div className={"product-sale"}>{sizeVolume}</div>
                                                <Button className={"shop-btn"}>
                                                    <img 
                                                      src={"/icons/shopping-cart.svg"}
                                                      style={{display: "flex"}}
                                                    />
                                                </Button>
                                                <Button className={"view-btn"} sx={{ right: "36px"}}>
                                                    <Badge badgeContent={product.productViews} color="secondary">
                                                        <RemoveRedEyeIcon 
                                                          sx={{
                                                            color: product.productViews === 0 ? "gray" : "white",
                                                        }}
                                                        />
                                                    </Badge>
                                                </Button>
                                            </Stack>
                                            <Box className={"product-desc"}>
                                                <span className={"product-title"}>
                                                    {product.productName}
                                                </span>
                                                <div className={"product-desc"}>
                                                    <MonetizationOnIcon />
                                                    {product.productPrice}
                                                </div>
                                            </Box>
                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className="no-data"> Products are not aviable!</Box>
                            )}
                        </Stack>
                    </Stack>

                    <Stack className={"pagination-section"}>
                        <Pagination 
                          count={3}
                          page={1}
                          renderItem={(item) => (
                            <PaginationItem 
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color={"secondary"}
                            />
                          )}
                        />
                    </Stack>
                </Stack>
            </Container>

       
            <div className={"brands-logo"}>
                <Container className={"family-brands"}>
                    <Box className={"category-title"}>Our family-brands</Box>
                    <Stack className={"brand-list"}>
                        <Box className={"review-box"}>
                            <img src={"/img/gurme.webp"} />
                        </Box>
                        <Box className={"review-box"}>
                            <img src={"/img/sweets.webp"} />
                        </Box>
                        <Box className={"review-box"}>
                            <img src={"/img/seafood.webp"} />
                        </Box>
                        <Box className={"review-box"}>
                            <img src={"/img/doner.webp"} />
                        </Box>
                    </Stack>
                </Container>
            </div>

            <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our Address</Box>
                        <iframe 
                          style={{marginTop: "60px"}}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13020.834418553352!2d129.082457!3d35.265169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568911565a23c0f%3A0xfb357dd0af17df78!2sNamsan!5e0!3m2!1sen!2skr!4v1690452712345!5m2!1sen!2skr"
                          width="1320"
                          height="500"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
}