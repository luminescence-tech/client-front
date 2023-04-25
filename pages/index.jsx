import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  backgroundColor: "black",
}

const theme = extendTheme({ colors })

export default function Home() {
  return (
    <div>

      <ChakraProvider theme={theme}>
        <main className={styles.main}>
          <InstructionsComponent></InstructionsComponent>
        </main>
      </ChakraProvider>

    </div>
  );
}
