import React from "react";
import { Container } from "@mui/material";
import TemplatesList from "./components/TemplatesList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 4 }} className="min-h-[80vh]">
        <h1 className="text-2xl font-bold m-4">Template Library</h1>
        <TemplatesList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
