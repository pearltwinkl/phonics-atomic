import { GeneralBadges } from "../../Templates";

const Achievements = () => {
	return (
        <div className='achievements__container'>
            <Navbar />
            <GeneralBadges />
            <LevelAcheivements />
        </div>
    );
};

export default Achievements;
