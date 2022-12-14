import styles from "./Item.module.scss"
import cardapio from "../itens.json"
import classNames from "classnames"



type Props = typeof cardapio[0];


function Item(props: Props) {
    const {title, description, price, size, category, serving, photo } = props;
    return(
        <div className={styles["item"]}>
            <div>
                <img className={styles["item__imagem"]} src={photo} alt={title} />
            </div>

            <div className={styles["item__descricao"]}>
                <h2 className={styles["item__titulo"]}> {title} </h2>
                <p> {description} </p>
                <div className={styles["item__tags"]}>
                    <div 
                        className={classNames({[
                            styles["item__tipo"]]: true,
                            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
                        })}
                    > 
                        {category.label} 
                    </div>
                    <div className={styles["item__porcao"]}>{size}g</div>
                    <div className={styles["item__qtdpessoas"]}>{serving} pessoa{serving === 1 ? "" : "s"}</div>
                    <div className={styles["item__valor"]}>R$: {price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default Item;