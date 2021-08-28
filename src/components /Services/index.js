import React from 'react';
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-5.svg'
import Icon4 from '../../images/svg-7.svg'
import {ServiceContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
const Services = () => {


    return (
        <>
        <ServiceContainer id="services">

            <ServicesH1> Our Services </ServicesH1>
                <ServicesWrapper>

                    <ServicesCard>

                        <ServicesIcon src={Icon1}/>
                        <ServicesH2> Reduce Expenses </ServicesH2>
                        <ServicesP> We will help you to manage your money and reduce your expenses  </ServicesP>
                    </ServicesCard>
                    <ServicesCard>

                        <ServicesIcon src={Icon2}/>
                        <ServicesH2> Virtual Assistance   </ServicesH2>
                        <ServicesP> Whether it early morning or late night where are always ready to help you</ServicesP>
                    </ServicesCard>
                    <ServicesCard>

                        <ServicesIcon src={Icon3}/>
                        <ServicesH2> Unbelievable Benefits  </ServicesH2>
                        <ServicesP> If you become our premium member you will enjoy 20% cash back on your every purchase </ServicesP>
                    </ServicesCard>
                    <ServicesCard>

                        <ServicesIcon src={Icon4}/>
                        <ServicesH2> We Care </ServicesH2>
                        <ServicesP> Joining us will not only benefit you financially but it will also make you eligible for our great prizes </ServicesP>
                    </ServicesCard>

                </ServicesWrapper>

        </ServiceContainer>

        </>
    )
}

export default Services