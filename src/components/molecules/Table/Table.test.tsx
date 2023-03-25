import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Table } from "./Table";

describe("Table", () => {
  test("should render when isOpen is true", () => {
    const tableData = [{id:1,name:'test1'},{id:2,name:'test2'}]
    const columns = [{
        title:'id',
        renderItem:(item:any)=>item.is
      },
      {
        title:'name',
        renderItem:(item:any)=>item.name
      }]

      const testPagination = {
        currentPage : Math.ceil(1),
        numberResults: 5,
        onNext: ()=>{},
        onBack: ()=>{},
        // filters:resultsFilter,
        total: Math.ceil(1)
      }
    const { queryByText } = render(<Table 
        loading={false}
        columnRender={columns}
        dataSource={tableData}
        keyExtractor={(item)=>item.id}
        pagination={testPagination} />);
    expect(queryByText('test1')).toBeInTheDocument();
  });
});