import React,{useState} from 'react'
import "./footer.scss"

interface valueData {
    id: number;
    slug: string;
    code: string;
    productId: number;
    name: string;
    description: string;
    blouseAttached: boolean;
    blouseFabric: string;
    sareeFabric: string;
    mrp: number;
    listingPrice: number;
    discount: number;
    isActive: boolean;
    isAvailable: boolean;
    supplierId: number;
    supplierName: string;
    availableQty: number;
    
  }

  interface footerProp{
    value:valueData[]
    setValue:(prop:any)=>void
}


const Footer:React.FC<footerProp> = ({value,setValue}) => {
const [showSort, setShowSort] = useState(false)
const [showFilter, setShowFilter] = useState(false)
   
const handleAscending=()=>{
   const data= [...value].sort((a, b) => {
        const fa = a.name.toLowerCase();
            const fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    setValue(data)
}

const handlelowToHigh=()=>{
    const data=[...value].sort((a,b)=>a.listingPrice-b.listingPrice)
    setValue(data)
}

const handleHighToLow=()=>{
const data=[...value].sort((a,b)=>b.listingPrice-a.listingPrice)
setValue(data)
}

const handleFilter=(val:string)=>{
    [...value].filter((res:any)=>res.supplierName===val)
}

const uniqueData= value.reduce((acc:any, current: any) => {
    const x = acc.find((item: { supplierName: any; }) => item.supplierName === current.supplierName);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (

    <>
    
    <div className='footer-main-div'>
        <div className='sorting' onClick={()=>setShowSort((pre)=>!pre)}> 
        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>sort
       {showSort? <div className='value-div'>
             <button type='button' onClick={handlelowToHigh}>Price low to high</button>
             <button type='button' onClick={handleHighToLow}>Price high to low</button>
             <button type='button'>Ratings high to low</button>
             <button type='button' onClick={handleAscending}>Name Ascending</button>
        </div>:""}
        </div>
        <div className='filter' onClick={()=>setShowFilter((pre)=>!pre)}> 
        <i className="fa fa-filter" aria-hidden="true"/> filter
        {showFilter?<div className='value-div'>
              <p>(Suppliers/Brands)</p>
              <div className="filter-value-div">
             {uniqueData.map((val:any)=> <button type='button' onClick={(e)=>handleFilter(val.supplierName)}>{val.supplierName}</button>)}
             </div>
        </div>:""}
        </div>
        
    </div>
    </>
  )
}

export default Footer