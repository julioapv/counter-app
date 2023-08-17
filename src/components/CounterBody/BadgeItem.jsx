import "./BadgeItem.css"

const BadgeItem = ({badge, name, count }) => {
    const badgeName = count >= badge.threshold ? name : "Locked";
    const badgeImg = count >= badge.threshold ? badge.image : 'https://i.imgur.com/akfbjHQ.png';
    return (
        <div className="badge-item">
            <img src={badgeImg} alt={badge.name} />
            <p>{badgeName}</p>
        </div>
    )
};

export { BadgeItem }