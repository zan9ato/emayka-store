const categories = ["Новинки", "Одежда", "Аксессуары"];
export default function HomePage() {
  return (
    <main className="storefront">
      <header className="header">
        <a className="wordmark" href="/" aria-label="Emayka — главная">emayka</a>
        <nav className="navigation" aria-label="Основная навигация">
          {categories.map((category) => <a href="#" key={category}>{category}</a>)}
        </nav>
        <div className="headerActions"><a href="#">Поиск</a><a href="#">Избранное</a><a href="#">Корзина</a></div>
      </header>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Новая коллекция</p>
          <h1>Одежда,<br />в которой ты — это ты.</h1>
          <p className="heroDescription">Исследуй новую коллекцию Emayka — вещи для каждого дня и твоего собственного ритма.</p>
          <a className="primaryButton" href="/catalog">Смотреть коллекцию <span aria-hidden="true">↗</span></a>
        </div>
        <div className="heroVisual" role="img" aria-label="Визуальная область главного баннера"><span>EMAYKA / NEW SEASON</span></div>
      </section>
      <section className="intro">
        <p className="eyebrow">EMAYKA STORE</p><h2>Твой стиль. Твои правила.</h2>
        <p>Здесь появятся подборки и контентные блоки, которыми команда сможет управлять из админ-панели.</p>
      </section>
    </main>
  );
}