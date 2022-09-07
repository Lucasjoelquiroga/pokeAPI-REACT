import React from 'react'
import './styles/pagination.css'

const Paginacion = ({ pokemons, page, setPage, currentBlock, setCurrentBlock }) => {
    const pageNumbers = [];
    const maxPagesPerBlock = 10
    const totalPages = Math.ceil(pokemons?.results.length / 18)

    const pageBlock = Math.ceil(totalPages / maxPagesPerBlock)

    for (let i = (currentBlock - 1) * maxPagesPerBlock; i < currentBlock * maxPagesPerBlock; i++) {
        if (i + 1 <= totalPages) {
            pageNumbers.push(i + 1)
        }
    }

    const previewsBlock = () => {
        setCurrentBlock(e => e - 1)
        setPage((currentBlock - 2) * maxPagesPerBlock)
    }
    const nextBlock = () => {
        setCurrentBlock(e => e + 1)
        setPage((currentBlock) * maxPagesPerBlock)
    }
    return (
        <div className='pagination'>
            <img className='paginacion__pokebola' src="./public/pokebola.png" alt="" />
            <h1 className='pagination__title'>{page + 1}</h1>
            <ul className='number__Pages-ul'>
                {
                    currentBlock !== 1 && <button className='pagination__btn' onClick={previewsBlock}>...</button>
                }
                {
                    pageNumbers.map(number => (
                        <li className='number__pages-li' key={number}>
                            <a className={page + 1 === number && 'active-page'} onClick={() => setPage(number - 1)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                {
                    currentBlock !== pageBlock && <button className='pagination__btn' onClick={nextBlock}>...</button>
                }

            </ul>
        </div>
    )
}

export default Paginacion