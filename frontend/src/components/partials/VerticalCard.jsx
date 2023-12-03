import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';
import { s1_icon, s2_icon, s3_icon, s4_icon } from "../../assets/index";

const CustomCard = ({ array, isAlternate, cardIcon }) => (
    <VerticalTimelineElement
        className={isAlternate ? 'ml-auto' : ''}
        contentStyle={{
            background: '#1d1836',
            color: '#fff'
        }}
        contentArrowStyle={{
            borderRight: '7px solid #232631'
        }}
        iconStyle={{ background: 'white' }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img src={cardIcon} alt={array.title} className="w-[70%] h-[70%] object-contain text-white" />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{array.title}</h3>
            <p className="text-[16px] font-semibold m-0">{array.content}</p>
        </div>

    </VerticalTimelineElement>
)

const VerticalCard = () => {
    return (
        <>
            <div className="text-white mx-6 my-12 bg-[#0f0529] rounded-xl py-4 px-2">
                <h2 className="text-3xl text-center md:text-6xl font-light">Join the freelancing community.</h2>

                <div className="mt-10 flex flex-col">
                    <VerticalTimeline>
                        <CustomCard array={{
                            title: 'Step 1',
                            content: 'Create an account on WizLance.',
                        }} isAlternate={false} cardIcon={s1_icon} />

                        <CustomCard array={{
                            title: 'Step 2',
                            content: 'Signup as a freelancer.',
                        }} isAlternate={true} cardIcon={s2_icon} />

                        <CustomCard array={{
                            title: 'Step 3',
                            content: 'Choose your category and upload your gig.',
                        }} isAlternate={false} cardIcon={s3_icon} />

                        <CustomCard array={{
                            title: 'FINISH',
                            content: 'Congratulations! You\'re now a freelancer. You can upload, edit and delete gig content.',
                        }} isAlternate={true} cardIcon={s4_icon} />
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default VerticalCard;
