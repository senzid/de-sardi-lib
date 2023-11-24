import React from 'react';
import './Table.scss';
import {Button} from '../../atoms/Button/Button'


interface Props<TElement> {
  keyExtractor:(item:TElement)=>string|number;
  columnRender: Array<{title:string,renderItem:(item:TElement)=>React.ReactNode;}>;
  dataSource?: TElement[];
  theme?: string;
  loading: boolean
  pagination?: {
    currentPage : number,
    numberResults: number,
    onNext: ()=>void,
    onBack: ()=>void,
    filters?: Array<any>,
    total: number
  }
}

export const Table =<TElement extends unknown>({
  keyExtractor,
  columnRender,
  dataSource,
  theme='white',
  loading,
  pagination
}: Props<TElement>) => {

  const isLoading = () => {
    let rows =[]
    const totalRows = pagination?pagination.numberResults: 5
    for (let i = 0; i < totalRows; i++) {
      rows.push(
      <tr key={`loading_${i}`}>
        <td colSpan={columnRender.length}>
        </td>
      </tr>)
    } 
    return rows
  }

  const isPreviuousDisabled = () => {
    return pagination?.currentPage === 1 ? true : false
  }

  const isNextDisabled = () => {
    return pagination?.currentPage === pagination?.total ? true : false
  }

  const renderBody = () => {
    return (loading ? 
      isLoading() :
      dataSource?.map((item)=>{
        return(
          <tr key={keyExtractor(item)}>
            {columnRender.map((col)=>{
              return <td key={keyExtractor(item)+col.title} >{col.renderItem(item)}</td>
            })}
          </tr>
        )
      })
    )
  }

  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          {columnRender.map((col)=>{
            return(
              <th key={col.title}>{col.title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody className="Body">
        {renderBody()}
      </tbody>
      { pagination &&
        <tfoot className="table-foot">
          <tr>
            <td colSpan={columnRender.length}>
              <div className="footer-content">
                <div>
                  {pagination.filters} {`page ${pagination.currentPage}/${pagination.total}`} 
                </div>
                <div>
                  <Button onClick={pagination.onBack} disabled={isPreviuousDisabled()} className="outlined">previous</Button> 
                  <Button onClick={pagination.onNext} disabled={isNextDisabled()} className="outlined">next</Button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      }
      </table>
  );
}