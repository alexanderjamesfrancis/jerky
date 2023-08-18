import Image from "next/image"
import NavMenu from "./navMenu"
import Checkout from "./Checkout"




export default function Nav(){

    const options = [
        {label: "Jerky", value: "jerky"},
        {label: "Biltong", value: "biltong"},
        {label: "SnapStix", value: "snapstix"},
    ]




    return(
        <div className="flex justify-between">
            <NavMenu options={options}
                 />
            <Image 
                src="/logo.PNG"
                width={600}
                height={200}
                alt="brand logo"
            />
            <Checkout />
            
        </div>
    )
}