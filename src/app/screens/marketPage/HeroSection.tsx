import { Box, Container, Stack } from "@mui/material";

export default function HeroSection() {
    return (
        <div className={"hero-section-frame"}>
           <Container>
            <Stack className="hero-section">
               <Stack className="category-section">
                <Box className="brand-logo">FASHION</Box>
                <Box className="product-filter"></Box>
               </Stack>
               <Stack></Stack>
            </Stack>
           </Container>
        </div>
    );
}