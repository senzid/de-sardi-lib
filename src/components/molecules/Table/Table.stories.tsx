import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Table} from "./Table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Table,
} as ComponentMeta<typeof Table>;

const tableData = [{id:1,name:'test1'},{id:2,name:'test2'},{id:3,name:'test3'},{id:4,name:'test4'},{id:5,name:'test5'}]
const columns = [{
    title:'id',
    renderItem:(item:any)=>item.id
  },
  {
    title:'name',
    renderItem:(item:any)=>item.name
  }]

  const pagination = {
    currentPage : Math.ceil(1),
    numberResults: 5,
    onNext: ()=>{},
    onBack: ()=>{},
    // filters:resultsFilter,
    total: Math.ceil(1)
  }


const TemplatePagination: ComponentStory<typeof Table> = (args) => <Table {...args}
columnRender={columns}
dataSource={tableData}
keyExtractor={(item)=>item.id}
pagination={pagination}/>;

export const tablePagination = TemplatePagination.bind({});
tablePagination.args = {
    loading: true
}

const Template: ComponentStory<typeof Table> = (args) => <Table {...args}
columnRender={columns}
dataSource={tableData}
keyExtractor={(item)=>item.id}
/>;

export const table = Template.bind({});
table.args = {
    loading: true
}