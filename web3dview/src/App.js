import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <>
    <div style={{padding:"5rem"}}>
      {/* <div style={{position:"absolute" , top:"150px" , width:"40%" , color:"white"}}>
      <h1 style={{color:"white" , fontWeight:"400" , fontSize:"5rem" , lineHeight:"4.5rem" , marginBottom:"2rem"}}>The Enviroment that changes the world</h1>
      <p style={{color:"white" , fontWeight:"300" , fontSize:"13px"  ,lineHeight:"1.5rem" , marginBottom:"2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti animi assumenda ipsa perspiciatis sit omnis quos nisi reprehenderit aspernatur harum unde dicta pariatur illo, atque laboriosam, reiciendis sed quaerat rem necessitatibus. Suscipit illo dolor reprehenderit alias reiciendis voluptas explicabo.</p>

      </div> */}
    <div style={{  width:"100%" , height:"100%"}}>
      <Spline scene="https://prod.spline.design/chIuwe2XEAAq6Lyb/scene.splinecode" />
    </div>
    </div>
    <div style={{padding:"0" , width:"100%" , height:"800px"}}>
      <div style={{position:"absolute" , top:"150px" ,  width:"50%" , color:"white" , padding:"0 5rem"}}>
      <h1 style={{color:"#1c1c1c" , fontWeight:"600" , fontSize:"5rem" , lineHeight:"4.5rem" , marginBottom:"2rem"}}>Unleash Your Potential</h1>
      <p style={{color:"#1c1c1c" , fontWeight:"300" , fontSize:"13px"  ,lineHeight:"1.5rem" , marginBottom:"2rem"}}>Embark on a journey of innovation and discovery with our cutting-edge solutions. At [Your Company Name], we believe in pushing boundaries and redefining possibilities. Join us in shaping the future, where every challenge is an opportunity, and every idea has the power to transform. Ignite your passion, fuel your ambition – welcome to a world where greatness knows no limits.</p>

      </div>
    <div style={{  width:"100%" , height:"100%"}}>
      <Spline scene="https://prod.spline.design/oLA3qCciFzqWPoJb/scene.splinecode" />
    </div>
    </div>
    </>
  );
}