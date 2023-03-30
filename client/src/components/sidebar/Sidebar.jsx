import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CategoryCard from "../categoryCard/CategoryCard";

const Title = styled.h1`
  margin-top: 50px;
  color: #518063;
`;

const CategoryCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      await axios
        .get("api/categories/")
        .then((res) => setCategories(res.data))
        .catch((err) => {
          console.log(err);
        });
    };

    fetchCategories();
    console.log(categories);
  }, []);

  return (
    <>
      <Title>Categories</Title>
      <CategoryCardContainer>
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </CategoryCardContainer>
    </>
  );
};

export default Sidebar;
