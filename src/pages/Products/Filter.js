import React, { useCallback } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { useProductsContext } from '../../contexts/products_context.js'
import useDebounce from '../../hooks/useDebounce.js'
import { useEffect } from 'react'


const Filter = () => {
  const { setGridView,
    grid_view,
    updateSearchQuery,
    search_term,
    updateSortQuery,
    getProductsData } = useProductsContext()

  const searchTermDebounced = useDebounce(search_term, 300)


  useEffect(() => {
    getProductsData()
    // eslint-disable-next-line
  }, [searchTermDebounced])


  return <Wrapper>
    <div className="btn-container">
      <button
        type='button'
        onClick={() => setGridView(true)}
        className={grid_view ? 'active' : ''}
      >
        <BsFillGridFill />
      </button>
      <button
        type='button'
        onClick={() => setGridView(false)}
        className={grid_view ? '' : 'active'}
      >
        <BsList />
      </button>
    </div>
    <p>4 products found</p>
    <hr />
    <form>
      <label htmlFor="sort">Sort by: </label>
      <select
        name="sort"
        id="sort"
        className='sort-input'
        onChange={updateSortQuery}
      >
        <option value='name-a'>Name (a-z)</option>
        <option value='name-z'>Name (z-a)</option>
        <option value='price-lowest'>Price (lowest)</option>
        <option value='price-highest'>Price (highest)</option>
      </select>
    </form>
    <hr />
    <form className="form-control" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name='text'
        value={search_term}
        placeholder='Search Product'
        className='search-input'
        onChange={updateSearchQuery}
      />
    </form>
  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  .search-input {
    padding: 0.5rem;
    border: 1px solid var(--primary-clr);
  }
  @media (max-width: 765px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 765px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--primary-clr);
      color: var(--primary-clr);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--primary-clr);
      color: var(--text-clr);
    }
  }

  .sort-input {
    border: 1px solid var(--primary-clr);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Filter
