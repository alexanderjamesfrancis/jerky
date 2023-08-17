import Image from "next/image"

export default function Nav(){
    return(
        <div>
            <navMenu
                 />
            <Image 
                src="logo-blank.png"
                width={600}
                height={200}
                alt="brand logo"
            />
            <Basket />
            
        </div>
    )
}