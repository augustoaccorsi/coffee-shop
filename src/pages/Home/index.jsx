import React from 'react';
import {
    HomeHeader,
    HomeMain,
    HomeHeaderSplitter,
    SpanIconCart,
    SpanIconClock,
    SpanIconPack,
    SpanIconCoffee,
    CoffeeList,
} from './styles';
import {
    PiPackageFill,
    PiCoffeeFill,
    PiShoppingCartFill,
} from 'react-icons/pi';
import { BsAlarmFill } from 'react-icons/bs';
import coffeeheader from '../../assets/images/hero.svg';
import Coffee from './Coffee/index';
import data from '../../coffee.json';

const Home = () => {
    return (
        <>
            <HomeHeader>
                <div>
                    <div>
                        <div>
                            <h1>
                                Encontre o café perfeito para qualquer hora do
                                dia
                            </h1>
                            <p>
                                Com o Coffee Delivery você recebe seu café onde
                                estiver, a qualquer hora
                            </p>
                        </div>
                        <HomeHeaderSplitter>
                            <div>
                                <div>
                                    <SpanIconCart>
                                        <PiShoppingCartFill />
                                        Compra simples e segura
                                    </SpanIconCart>
                                </div>
                                <div>
                                    <SpanIconClock>
                                        <PiPackageFill />
                                        Entrega rápida e rastreada
                                    </SpanIconClock>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <SpanIconPack>
                                        <BsAlarmFill />
                                        Embalagem mantém o café intacto
                                    </SpanIconPack>
                                    <SpanIconCoffee>
                                        <PiCoffeeFill />O café chega fresquinho
                                        até você
                                    </SpanIconCoffee>
                                </div>
                            </div>
                        </HomeHeaderSplitter>
                    </div>
                    <img src={coffeeheader} alt="coffee header" />
                </div>
            </HomeHeader>
            <HomeMain>
                <h2>Nossos cafés</h2>
                <CoffeeList>
                    {data.coffees.map((coffee) => (
                        <Coffee key={coffee.id} coffee={coffee} />
                    ))}
                </CoffeeList>
            </HomeMain>
        </>
    );
};

export default Home;
