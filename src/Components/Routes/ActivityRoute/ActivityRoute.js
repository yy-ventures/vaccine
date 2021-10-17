import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./ActivityRoute.scss";
import blueHand from "../../../assets/blue-hand.svg";
import redMagnify from "../../../assets/red-magnify.svg";
import yellowRight from "../../../assets/yellow-right.svg";
import JoinTheCauseRouter from '../JoinTheCauseRouter/JoinTheCauseRouter';

const ActivityRoute = () => {
    return (
        <section className="activity-route-section">
            <Navbar/>
            <div className="activity-route-section-container py-5">
                {/* activity list  */}
                <div className="activity-list mt-3">
                    <div className="activity-list-header text-center">
                        <img src={blueHand} alt="blue-hand" />
                        <h4 className="mt-3">Right to Free Access <br/> to the Vaccine for All</h4>
                    </div>
                    <div className="activity-list-body mt-5">
                        <p>Our right to health can be guaranteed only by our duty to health, both on an individual and collective level. As a priority, there is a need for our conceptual recognition, and actual translation into action, of our responsibilities.  As the COVID-19 pandemic continues to wreak havoc across Mother Earth, there is an explosion of research activities and clinical trials to find cures and vaccines. Indeed, everyone converges on the idea that ultimately the only way to definitively eradicate the pandemic is to have a vaccine that can be administered to all the inhabitants of the planet, urban or rural, men or women, living in rich or poor countries.</p>
                        <p>The pandemic clearly exposes the strengths and weaknesses of healthcare systems in different countries, as well as the obstacles and inequities of access to healthcare. The effectiveness of the upcoming vaccination campaign will depend on its universality.</p>
                        <p>Governments, foundations, international financial organizations like the World Bank and the regional development banks should work out details of how to make the vaccines available free of cost. </p>
                        <p>We appeal to governments, foundations, charity organizations, philanthropist individuals, and social businesses (that is, businesses which are created to solve people’s problems without taking any personal profit out of them) to come forward to produce and/or distribute the vaccines all over the world. </p>
                        <p>We invite all social, political, and health entities to re-affirm our collective responsibility for the protection of all vulnerable persons related to poverty, discrimination, gender, illness, loss of autonomy or functionality, or age.</p>
                    </div>
                </div>
                {/* activity list  */}
                <div className="activity-list mt-5">
                    <div className="activity-list-header text-center">
                        <img src={redMagnify} alt="red-magnify" />
                        <h4 className="mt-3">Right to Free Access <br/> to the Vaccine for All</h4>
                    </div>
                    <div className="activity-list-body mt-5">
                        <p>The research for a vaccine is a long process. The estimated time for development of a COVID-19 vaccine is about 18 months or less, which would be an absolute speed record.</p>
                        <p>This research needs immense economic investments. Many private sector research laboratories who are engaged in the vaccine research will be expecting a return on their investments. We must work out an unambiguous procedure to determine what would be a fair level of this return in exchange for putting the vaccine in the public domain. For this reason, information issued by the private sector, scientists, and authorities, needs to be timely, accurate, clear, complete, and transparent. The research results should be in the public domain, making it available to any production facility that pledges to operate under strict international regulatory supervision and only to such facilities.</p>
                    </div>
                </div>
                {/* activity list  */}
                <div className="activity-list mt-5">
                    <div className="activity-list-header text-center">
                        <img src={yellowRight} alt="yellow-right" />
                        <h4 className="mt-3">Right to Free Access <br/> to the Vaccine for All</h4>
                    </div>
                    <div className="activity-list-body mt-5">
                        <p>We urge the World Health Organization to design a World Action Plan on COVID-19 vaccine. We appeal to them to set up an international committee responsible for monitoring the vaccine research and to assure equal access to the vaccine for all countries and all people within a publicly announced pre-determined time frame.</p>
                        <p>We appeal to all world leaders, Secretary-General of the United Nations, Director General of the World Health Organization, religious leaders, social leaders, moral leaders, leaders of  research laboratories, pharmaceutical companies, and media leaders to join hands to ensure that in the case of COVID-19 vaccine we have a global consensus for free universal access, far ahead of its actual production and distribution.</p>
                    </div>
                </div>
            </div>
            <JoinTheCauseRouter/>
        </section>
    );
};

export default ActivityRoute;