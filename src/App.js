import ProductView from "./components/ProductView";

// Eventually this should be data loaded from a service, for now just fake it
import products from "./mockdata/products.json";
/** Note to developers
 * The import above works within create-react-app because
 * Webpack bundles the file into the application.
 * You'll learn how to fetch content through APIs in a future lesson.
 */
   
function App() {
  return (
    <div className="App">
      <ProductView products={products} />
    </div>
  );
}

export default App;
