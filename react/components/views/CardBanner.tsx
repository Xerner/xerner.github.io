
interface ICardBanner {
    title: string;
}

export default function CardBanner(props: ICardBanner) {
    const { title } = props;
    
    return <div className="card-banner align-items-start">
        <img src="images/title-banner-left.png" alt="title-banner-left" className="card-banner-image green-30-shadow-lg" />
        <div
            className="card-title green-50-bg green-30-shadow-lg text-center fs-1"
            style={{ fontFamily: 'futura', border: 'none' }}
        >
            {title}
        </div>
        <img src="images/title-banner-right.png" alt="title-banner-right" className="card-banner-image green-30-shadow-lg" />
    </div>
}