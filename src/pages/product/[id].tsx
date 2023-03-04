import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camisa</h1>
        <span>79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto recusandae nulla maiores accusantium eius molestiae aliquam ullam quae autem ea minima tempore animi expedita explicabo, inventore aut ab ratione architecto.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}