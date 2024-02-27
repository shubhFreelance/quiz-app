import Image from "next/image";
import thankyou from '../../public/thankyou.png'
import styles from "./page.module.css";

export default function page(){
    return (
        <div className={styles.image}>
        <Image src={thankyou} alt="thankyou" width="564" height="564" />
        </div>
    )
}