export default function Portfolio() {
  return (
    <section style={{padding:"40px",background:"#f5f5f5"}}>

      <h2 style={{textAlign:"center"}}>Our Work</h2>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"10px",marginTop:"20px"}}>

        <img src="https://via.placeholder.com/300" />
        <img src="https://via.placeholder.com/300" />
        <img src="https://via.placeholder.com/300" />

      </div>

    </section>
  );
}
