import ProductCard from "../product-card/product-card.component";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return isLoading ? (
    <Spinner />
  ) : (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
