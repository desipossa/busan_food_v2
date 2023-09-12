import { useParams } from "react-router-dom";

const GuList = ({ food }) => {
    const { gu } = useParams();
    const guList = food.filter(it => it.GUGUN_NM == gu);
    console.log(guList)
    return (
        <>
            <h2>{gu} 구별 맛집</h2>
            <div className="inner">
                <ul className="list">
                    {
                        guList.map(it => {
                            return (
                                <li key={it.UC_SEQ}>
                                    <strong>{it.MAIN_TITLE}</strong>
                                    <div className="img_box">
                                        <img src={it.MAIN_IMG_NORMAL} alt={it.MAIN_TITLE} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default GuList;