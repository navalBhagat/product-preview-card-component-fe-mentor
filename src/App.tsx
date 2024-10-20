import "./App.css";

function App() {
  return (
    <main className="content">
      <section className="card">
        <div className="image" />
        <div className="product-information">
          <span className="subtitle">PERFUME</span>
          <span className="title">Gabrielle Essence Eau De Parfum</span>
          <p className="description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <span className="new-price">$149.99</span>
            <span className="old-price">$169.99</span>
          </div>
          <button className="add-button">
            <img src="/images/icon-cart.svg" />
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
