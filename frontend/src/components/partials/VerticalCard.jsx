import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';
import { temp_icon } from "../../assets";

const CustomCard = ({ array, isAlternate }) => (
    <VerticalTimelineElement
        className={isAlternate ? 'ml-auto' : ''}
        contentStyle={{
            background: '#1d1836',
            color: '#fff'
        }}
        contentArrowStyle={{
            borderRight: '7px solid #232631'
        }}
        iconStyle={{ background: '#232631' }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img src={temp_icon} alt={array.title} className="w-[70%] h-[70%] object-contain text-white" />
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
                        }} isAlternate={false} />

                        <CustomCard array={{
                            title: 'Step 2',
                            content: 'Signup as a freelancer.',
                        }} isAlternate={true} />

                        <CustomCard array={{
                            title: 'Step 3',
                            content: 'Choose your category and upload your gig.',
                        }} isAlternate={false} />

                        <CustomCard array={{
                            title: 'FINISH',
                            content: 'Congratulations! You\'re now a freelancer. You can upload, edit and delete gig content.',
                        }} isAlternate={true} />
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}

export default VerticalCard;