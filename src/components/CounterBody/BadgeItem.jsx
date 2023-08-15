import "./BadgeItem.css"

const BadgeItem = ({badge, name, count }) => {
    const badgeName = count >= badge.threshold ? `You've unlocked ${name}` : "Locked";
    return (
        <div className="badge-item">
            <img src={badge.image} alt={badge.name} />
            <p>{badgeName}</p>
        </div>
    )
};

export { BadgeItem }