import { HomeOffer } from "./HomePage/HomeOffer"
import { HomeBody } from "./HomePage/HomeBody"
import  NavbarLogin  from "./NavbarLogin"

export const HomePage =()=>{
    return (
        <div>
          <NavbarLogin />
          <HomeOffer></HomeOffer>
          <HomeBody></HomeBody>

      
        </div>
    )
}