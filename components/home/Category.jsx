import styles from "./categoryList.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Category = ({ name,  icon }) => {
    return (
        <section className={`${styles.category} relative items-center hover:border-[#1A1A1A] rounded-xl`}>
            <MdOutlineArrowOutward className="absolute right-5 top-5 text-3xl text-[#4D4D4D] hover:text-[#b1b1b1]" />
            <div className={styles.icon} >
                {icon}
            </div>
            
            <h3 className={styles.title}>{name}</h3>
           


        </section>
    )
}


export default Category;