import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import Product from "./Product.js";
import StoreNavigation from "./StoreNavigation.js";
import Footer from "./Footer.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [typeSortOut, setTypeSortOut] = useState("");
  const [types, setTypes] = useState(false);
  const [sortNames, setSortNames] = useState(false);
  const [sortPrice, setSortPrice] = useState(false);
  const [resetFilter, setResetFilter] = useState(false);
  const [showFiltering, setShowFiltering] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [productPage, setProductPage] = useState(0);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const [pages, setPages] = useState(false);
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );
  
  const sortIconRotate = sortNames || sortPrice ? "rotate-180" : "rotate-0"

  let savedProducts = []
  let savedTypes = []

  console.log(products)

  useEffect(() => {
      get(`NSW/${props.category}.json`).then(data => {

        Object.keys(data).forEach(prod => {
          const type = data[prod].type
          savedProducts.push({...data[prod], position: savedProducts.length})
          if (savedTypes.includes(type)) {
            return
          } else {
            savedTypes.push(type)
          }
        })

        setProducts(savedProducts);
        setProductData(savedProducts);
        setTypes(savedTypes);
        setResetFilter(false);
        setProductPage(0)
      }).catch((error) => console.log("Could not load products", error));
  }, [pathname, resetFilter]);
  
  let savepages = []

  useEffect(() => {
    for (let index = 0; index < (products.length / 6); index++) {
      savepages.push(index)
    }
    setPages(savepages)
  }, [products, typeSortOut])
  
  const handleProductPage = (status) => {
    document.documentElement.scrollTo(0, 0)
    if (typeof(status) === 'number') {setProductPage(status * 6)}
    else if (status === "previous") {setProductPage(productPage - 6)}
    else {setProductPage(productPage + 6)}
  }

  useEffect(() => {
    if (products.length === 0) return
    if (productPage === 0) {setFirstPage(true)}
        else {setFirstPage(false)}
    if (products.length <= productPage + 6) {setLastPage(true)}
      else {setLastPage(false)}
  }, [productPage, products])

  const handleSorting = (sortBy) => {
    if (sortBy === "name") {
      setSortNames(!sortNames)
      setSortPrice(false)
      products.sort((a,b) => {
        if (sortNames){
          if (a.name < b.name) {return -1;}
          if (a.name > b.name) {return 1;}
          return 0
        } else {
          if (a.name > b.name) {return -1;}
          if (a.name < b.name) {return 1;}
          return 0
        }
      })
    }
    if (sortBy === "price") {
      setSortPrice(!sortPrice)
      setSortNames(false)
      products.sort((a,b) => {
        if (sortPrice){
          if (a.price > b.price) {return -1;}
          if (a.price < b.price) {return 1;}
          return 0
        } else {
          if (a.price < b.price) {return -1;}
          if (a.price > b.price) {return 1;}
          return 0
        }
      })
    }
    products.forEach(product => {
      savedProducts.push({...product, position: savedProducts.length})
    })
    setShowSorting(false)
    setProducts(savedProducts)
  }

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    productData.forEach(product => {
      if (product.type === typeSortOut) {
        savedProducts.push(product)
        setProducts(savedProducts)
      }
    })
  }, [typeSortOut])

  useEffect(() => {
    setTypeSortOut("")
  }, [pathname, typeSortOut])

  const handleTypeFilter = (e) => {
    setProductPage(0)
    setTypeSortOut(e.currentTarget.id)
    setShowFiltering(!showFiltering)
    if (e.currentTarget.id === "") {
      setResetFilter(true);
    }
  }

  useEffect(() => {
		const cleanedSearchItem = searchItem.toLowerCase().trim()
    setTypeSortOut(searchItem)
    productData.forEach(product => {
      if (product.name.toLowerCase().includes(cleanedSearchItem)) {
        savedProducts.push({...product, searched: "block"})
        setProducts(savedProducts);
      } else {
        savedProducts.push({...product, searched: "hidden"})
        setProducts(savedProducts);
      }
    })
  }, [searchItem])

  return (<>
    <StoreNavigation />
    <section className="">
      <h2 className="block sm:hidden w-full text-white text-2xl text-center font-bold">{props.category}</h2>
      <div className="mx-auto max-w-2xl px-4 sm:pb-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex justify-between items-center py-5 lg:mx-12">
          <div className="flex">
            <div className="relative h-[24px] mx-2 mb-1">
              <button className="relative flex hover:scale-110 transform duration-200 ease-in-out z-40" onClick={() => setShowFiltering(!showFiltering)}>
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                <p className="hidden sm:block text-white pl-2 text-xl">Filter</p>
              </button>
              {showFiltering && (<>
                <div className="absolute z-40 flex flex-col bg-slate-700 p-4">
                  <button className="text-cyan-600 text-left truncate py-1 px-2 hover:bg-slate-800" id="" onClick={(e) => handleTypeFilter(e)}>
                    Show all
                  </button>
                  {types && types.map(productType => {
                    let productTypeText = productType + "s"
                    if (productType.endsWith("y")) {
                      productTypeText = productTypeText.slice(0, -2) + "ies"
                    }
                    return (
                      <button key={productType} className="text-white text-left truncate py-1 px-2 hover:bg-slate-800" id={productType} onClick={(e) => handleTypeFilter(e)}>
                        {productTypeText}
                      </button>
                    )
                  })}
                </div>
              </>)}
            </div>
                  
            <div className="relative h-[24px] mx-2 mb-1">
              <button className="relative flex hover:scale-110 transform duration-200 ease-in-out z-40" onClick={() => setShowSorting(!showSorting)}>
                <svg className={`h-7 w-7 text-white ${sortIconRotate} transform duration-300 ease-in-out`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                <p className="hidden sm:block text-white pl-2 text-xl">Sort</p>
              </button>
              {showSorting && (<>
                <div className="absolute z-40 flex flex-col bg-slate-700 p-4">
                  <button className="text-white truncate" onClick={() => handleSorting("name")}>
                    Sort by name
                  </button>
                  <button className="text-white truncate" onClick={() => handleSorting("price")}>
                    Sort by price
                  </button>
                </div>
              </>)}
            </div>
          </div>

          <div className="relative flex mx-2 z-40">
					  <input className="h-[28px] w-40 p-1" onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder="Search item.." />
            <svg className="absolute bg-white mt-[2px] h-6 w-6 right-0 text-slate-600 cursor-default" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <h2 className="absolute z-0 hidden sm:block w-full mb-2 text-white text-3xl text-center font-bold">{props.category}</h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 mx-0 sm:mx-0 md:mx-0 lg:mx-12">
          {loading && <Loader />}
          {products.map(product => {
            if (product.position < (productPage + 6) && product.position >= productPage) {
            return (
              <Product
                type={props.type}
                key={product.id}
                details={product}
                cart={props.cart}
                onProductAdd={props.onProductAdd}
                onProductRemove={props.onProductRemove}
                onProductDelete={props.onProductDelete}
              ></Product>
            );
          }
        })}
        </div>
        <div className="flex w-full justify-center my-1">
          {!firstPage && (
          <button className="text-white px-2 hover:scale-125 transform duration-75 ease-in-out" onClick={() => handleProductPage("previous")}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clipRule="evenodd" />
            </svg>
          </button>
          )}
          {pages && pages.map(page => {
              if (page * 6 === productPage) {
                return (
                  <button key={page} className="text-cyan-700 font-bold p-1 scale-150" onClick={() => handleProductPage(page)}>{(page + 1)}</button>
                )
              }
            return (
              <button key={page} className="text-white font-bold p-1 hover:scale-125 transform duration-75 ease-in-out" onClick={() => handleProductPage(page)}>{(page + 1)}</button>
            )
            })
          }
          {!lastPage && (
          <button className="text-white px-2 hover:scale-125 transform duration-75 ease-in-out" onClick={() => handleProductPage("next")}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </button>
          )}
          </div>
      </div>
    </section>
    <Footer />
  </>);
}