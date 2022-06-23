function Blog(props) {
  return (
    <div className="box">
      <h2 className="header">{props.posts.title}</h2>
      <p className="dis">{props.posts.dis}</p>
      <ul>
        {props.posts.features.map((feature, i) => {
          return (
            <li key={i} className={feature.isAvailable ? "dark" : "light"}>
              {feature.name}
            </li>
          );
        })}
      </ul>
      <p className="rate">
        $123<small className="small">/month</small>
      </p>
      <button>Choose</button>
    </div>
  );
}

export default Blog;
