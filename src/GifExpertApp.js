import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Wine']);

    return (
        <>
            <h2>Suri, TKM</h2>
            <AddCategory setCategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
