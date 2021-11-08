import React from 'react'
import { HeroCard } from './HeroCard'

export const HeroList = ({heroes = []}) => {

    return (
        <div className="row container">
            {heroes.map(hero => <HeroCard key={hero.id} hero={hero}/>) 
            }
        </div>
    )
}
