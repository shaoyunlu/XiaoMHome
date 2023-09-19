<template>
    <h1>Table 表格</h1>
    <p>用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。</p>
    <h2>基础表格</h2>
    <p>基础的表格展示用法。</p>
    <p text="sm">
        <p>当 <code>xmv-table</code> 元素中注入 <code>data</code> 对象数组后，在 <code>xmv-table-column</code> 
        中用 <code>prop</code> 属性来对应对象中的键名即可填入数据，用 <code>label</code> 属性来定义表格的列名。 
        可以使用 <code>width</code> 属性来定义列宽。</p>
    </p>
    <xmv-code :code="code_1">
        <div>
            <xmv-table :data="tableData" style="width: 100%">
                <xmv-table-column prop="date" label="Date" width="180" />
                <xmv-table-column prop="name" label="Name" width="180" />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>带斑马纹表格</h2>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <p text="sm">
        <p><code>stripe</code> 可以创建带斑马纹的表格。 如果 <code>true</code>, 表格将会带有斑马纹。</p>
    </p>
    <xmv-code :code="code_2">
        <div>
            <xmv-table :data="tableData" style="width: 100%" stripe>
                <xmv-table-column prop="date" label="Date" width="180" />
                <xmv-table-column prop="name" label="Name" width="180" />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>带边框表格</h2>
    <p text="sm">
        <p>默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 <code>border</code> 属性，
        把该属性设置为 <code>true</code> 即可启用。</p>
    </p>
    <xmv-code :code="code_3">
        <div>
            <xmv-table :data="tableData" style="width: 100%" stripe border>
                <xmv-table-column prop="date" label="Date" width="180" />
                <xmv-table-column prop="name" label="Name" width="180" />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>带状态表格</h2>
    <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
    <p text="sm">
        <p>通过设置<code>data</code>属性的数组中的每条记录的<code>xmvTrStatus</code></p>
    </p>
    <xmv-code :code="code_4">
        <div>
            <xmv-table :data="tableData_1" style="width: 100%" border>
                <xmv-table-column prop="date" label="Date" width="180" />
                <xmv-table-column prop="name" label="Name" width="180" />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>固定表头</h2>
    <p>纵向内容过多时，可选择固定表头。</p>
    <p text="sm"><p>只要在 <code>xmv-table</code> 元素中定义了 <code>height</code> 属性，
        即可实现固定表头的表格，而不需要额外的代码。</p>
    </p>
    <xmv-code :code="code_5">
        <div>
            <xmv-table :data="tableData_2" style="width: 100%" height="250">
                <xmv-table-column prop="date" label="Date" width="180" />
                <xmv-table-column prop="name" label="Name" width="180" />
                <xmv-table-column prop="address" label="Address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>固定列</h2>
    <p>横向内容过多时，可选择固定列。</p>
    <p text="sm">
        <p>固定列需要使用 <code>fixed</code> 属性，它接受 <code>Boolean</code> 值。 
        如果为 <code>true</code>, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。</p>
    </p>
    <xmv-code :code="code_6">
        <div>
            <xmv-table :data="tableData_3" style="width: 100%">
                <xmv-table-column prop="name1" label="name1" width="150" fixed/>
                <xmv-table-column prop="name2" label="name2" width="150" />
                <xmv-table-column prop="name3" label="name3" width="150"/>
                <xmv-table-column prop="name4" label="name4" width="150"/>
                <xmv-table-column prop="name5" label="name5" width="150"/>
                <xmv-table-column prop="name6" label="name6" width="150"/>
                <xmv-table-column prop="name7" label="name7" width="150"/>
                <xmv-table-column prop="name8" label="name8" width="150" fixed="right"/>
            </xmv-table>
        </div>
    </xmv-code>
    <h2>固定列和表头</h2>
    <p>当您有大量数据块放入表中，您可以同时固定表头和列。</p>
    <p text="sm"><p>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p></p>
    <xmv-code :code="code_7">
        <div>
            <xmv-table :data="tableData_3" style="width: 100%" height="200">
                <xmv-table-column prop="name1" label="name1" width="150" fixed/>
                <xmv-table-column prop="name2" label="name2" width="150" />
                <xmv-table-column prop="name3" label="name3" width="150"/>
                <xmv-table-column prop="name4" label="name4" width="150"/>
                <xmv-table-column prop="name5" label="name5" width="150"/>
                <xmv-table-column prop="name6" label="name6" width="150"/>
                <xmv-table-column prop="name7" label="name7" width="150"/>
                <xmv-table-column prop="name8" label="name8" width="150" fixed="right"/>
            </xmv-table>
        </div>
    </xmv-code>
    <h2>流体高度</h2>
    <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
    <p text="sm"><p>通过设置 <code>max-height</code> 属性为 <code>xmv-table</code> 指定最大高度。 
        此时若表格所需的高度大于最大高度，则会显示一个滚动条。</p>
    </p>
    <xmv-code :code="code_8">
        <div>
            <xmv-table :data="tableData_4" style="width: 100%" max-height="200">
                <xmv-table-column prop="name1" label="name1" width="150" fixed/>
                <xmv-table-column prop="name2" label="name2" width="150" />
                <xmv-table-column prop="name3" label="name3" width="150"/>
                <xmv-table-column prop="name4" label="name4" width="150"/>
                <xmv-table-column prop="name5" label="name5" width="150"/>
                <xmv-table-column prop="name6" label="name6" width="150"/>
                <xmv-table-column prop="name7" label="name7" width="150"/>
                <xmv-table-column prop="name8" label="name8" width="150" fixed="right">
                    <template #default="{props}">
                        <xmv-button link type="primary" size="small" @click="handleDelete(props.data)">Delete</xmv-button>
                    </template>
                </xmv-table-column>
            </xmv-table>
            <xmv-button style="width: 100%;margin-top:10px;" @click="onAddItem">Add Item</xmv-button>
        </div>
    </xmv-code>
    <h2>单选</h2>
    <p>选择单行数据时使用色块表示。</p>
    <p text="sm"><p>Table 组件提供了单选的支持， 只需要配置 <code>highlight-current-row</code> 属性即可实现单选。 
        之后由 <code>current-change</code> 事件来管理选中时触发的事件，
        它会传入 <code>currentRow</code>，<code>oldCurrentRow</code>。 
        如果需要显示索引，可以增加一列 <code>xmv-table-column</code>，
        设置 <code>type</code> 属性为 <code>index</code> 即可显示从 1 开始的索引号。</p>
    </p>
    <xmv-code :code="code_9">
        <div>
            <xmv-table :data="tableData" style="width: 100%" highlight-current-row>
                <xmv-table-column type="index" width="56"></xmv-table-column>
                <xmv-table-column prop="name" label="name" />
                <xmv-table-column prop="date" label="date"  />
                <xmv-table-column prop="address" label="address" />
            </xmv-table>
        </div>
    </xmv-code>
    <h2>多选</h2>
    <p>你也可以选择多行。</p>
    <p text="sm"><p>实现多选非常简单: 手动添加一个 <code>xmv-table-column</code>，设 <code>type</code> 属性为 <code>selection</code> 即可； 
        除了多选，这里还使用到了 <code>show-overflow-tooltip</code>属性。 默认情况下，如果单元格内容过长，会占用多行显示。 
        若需要单行显示可以使用 <code>show-overflow-tooltip</code> 属性，
        它接受一个 <code>Boolean</code>， 为 <code>true</code> 时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
    </p>
    <xmv-code :code="code_10">
        <div>
            <xmv-table :data="tableData_2" style="width: 100%" height="250">
                <xmv-table-column type="checkbox" width="55" />
                <xmv-table-column prop="name" label="name" />
                <xmv-table-column prop="date" label="date"  />
                <xmv-table-column prop="address" label="address" show-overflow-tooltip/>
            </xmv-table>
        </div>
    </xmv-code>
    <h2>排序</h2>
    <p>对表格进行排序，可快速查找或对比数据。</p>
    <p text="sm"><p>在列中设置 sortable 属性即可实现以该列为基准的排序</p></p>
    <xmv-code :code="code_11">
        <div>
            <xmv-table :data="tableData_2" height="250">
                <xmv-table-column prop="name" label="name" sortable/>
                <xmv-table-column prop="date" label="date"  sortable/>
                <xmv-table-column prop="address" label="address"/>
            </xmv-table>
        </div>
    </xmv-code>
    <h2>自定义列模板</h2>
    <p>自定义列的显示内容，可组合其他组件使用。</p>
    <p text="sm">
        <p>通过 <code>slot</code> 可以获取到当前行的 data 数据</p>
    </p>
    <xmv-code :code="code_12">
        <div>
            <xmv-table :data="tableData_2" height="250">
                <xmv-table-column prop="name" label="name" sortable>
                    <template #default="{props}">
                        <xmv-tag>{{ props.data.name }}</xmv-tag>
                    </template>
                </xmv-table-column>
                <xmv-table-column prop="date" label="date"  sortable/>
                <xmv-table-column prop="address" label="address"/>
            </xmv-table>
        </div>
    </xmv-code>
    <h2>展开行</h2>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <p text="sm">
        <p>通过设置 type="expand" 和 slot 可以开启展开行功能， 
            xmv-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 slot 相同。</p>
    </p>
    <xmv-code :code=code_13>
        <div>
            <xmv-table :data="tableData_2" height="350">
                <xmv-table-column type="expand" width="55">
                    <template #default="{props}">
                        <xmv-tag>{{ props.data.name }}</xmv-tag>
                    </template>
                </xmv-table-column>
                <xmv-table-column prop="date" label="date"/>
                <xmv-table-column prop="address" label="address"/>
            </xmv-table>
        </div>
    </xmv-code>
    <h2>树形数据与懒加载</h2>
    <p text="sm">
        <p>支持树类型的数据的显示。当 row 中包含 <code>children</code> 字段时，被视为树形数据。此外，子行数据可以异步加载。
            设置 Table 的<code>lazy</code> 属性为 true 与加载函数 <code>load</code>。通过指定 row 中的<code>hasChildren</code>
            字段来指定哪些行是包含子节点。
        </p>
    </p>
    <xmv-code :code="code_14">
        <div>
            <xmv-table :data="tableData_6">
                <xmv-table-column prop="name" label="name"></xmv-table-column>
                <xmv-table-column prop="date" label="date"/>
                <xmv-table-column prop="address" label="address"/>
            </xmv-table>
        </div>
        <div style="margin-top:20px">
            <xmv-table :data="tableData_6" lazy :load="load">
                <xmv-table-column prop="name" label="name"></xmv-table-column>
                <xmv-table-column prop="date" label="date"/>
                <xmv-table-column prop="address" label="address"/>
            </xmv-table>
        </div>
    </xmv-code>
</template>

<script>
import {defineComponent ,ref} from 'vue'
export default defineComponent({
    name:"",
    setup(props ,context) {
        const tableData = [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
        const tableData_1 = [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                xmvTrStatus: 'success'
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                xmvTrStatus: 'warning'
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                xmvTrStatus: 'danger'
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
                xmvTrStatus: 'error'
            },
        ]
        const tableData_2 = [
            {
                date: '2016-05-03',
                name: 'Alex',
                address: 'No. 189, Grove St, Los Angeles No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Kevin',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Echo',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }
        ]
        const tableData_3 = [
            {name1 : 'name1',name2 : 'name2',name3 : 'name3',name4 : 'name4',
            name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'},
            {name1 : 'name1',name2 : 'name2',name3 : 'name3',name4 : 'name4',
            name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'},
            {name1 : 'name1',name2 : 'name2',name3 : 'name3',name4 : 'name4',
            name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'},
            {name1 : 'name1',name2 : 'name2',name3 : 'name3',name4 : 'name4',
            name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'},
            {name1 : 'name1',name2 : 'name2',name3 : 'name3',name4 : 'name4',
            name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'}
        ]
        const tableData_4 = ref([
            {name1 : 'name1',name2 : 'name2',name3 : 'name3',name4 : 'name4',
            name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'}
        ])
        const tableData_5 = ref([
            {
                date: '2016-05-03',
                name: 'Alex',
                address: 'No. 189, Grove St',
                hasChildren : true,
                children : [
                    {
                        date: '2016-05-03111',
                        name: 'Alex111',
                        address: 'No. 189, Grove St111'
                    }
                ]
            },
        ])
        const tableData_6 = ref([
            {
                date: '2016-05-03',
                name: 'Cat',
                address: 'No. 189, Grove StNo. 189'
            },
            {
                date: '2016-05-03',
                name: 'Alex',
                address: 'No. 189, Grove St'
            },
            
            {
                date: '2016-05-03',
                name: 'Bob',
                address: 'No. 189, Grove St',
                hasChildren : true,
                children : [
                    {
                        date: '2016-05-03111',
                        name: 'Bob1',
                        address: 'No. 189, Grove St111',
                    },
                    {
                        date: '2016-05-03111',
                        name: 'Bob2',
                        address: 'No. 189, Grove St111',
                    },
                    {
                        date: '2016-05-03111',
                        name: 'Bob3',
                        address: 'No. 189, Grove St111'
                    }
                ]
            },
            {
                date: '2016-05-03',
                name: 'Dong',
                address: 'No. 189, Grove St'
            }
        ])
        const onAddItem = ()=>{
            tableData_4.value.push({name1 : new Date().getTime(),name2 : 'name2',name3 : 'name3',name4 : 'name4',
                name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'})
        }
        const handleDelete = (data)=>{
            tableData_4.value.splice(data.xmvSortIndex, 1)
        }
        const load = ()=>{
            return new Promise((resolve ,reject)=>{
                setTimeout(() => {
                    resolve(
                        [
                            {
                                date: '2016-05-03111',
                                name: 'Bob1',
                                address: 'No. 189, Grove St111',
                            },
                            {
                                date: '2016-05-03111',
                                name: 'Bob2',
                                address: 'No. 189, Grove St111',
                            }
                        ]
                    )
                }, 3000);
            })
        }

        let code_1 =
                        `
                            // JS
                            const tableData = [
                                {
                                    date: '2016-05-03',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                },
                                {
                                    date: '2016-05-02',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                },
                                {
                                    date: '2016-05-04',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                },
                                {
                                    date: '2016-05-01',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                },
                            ]
                            // Template
                            <div>
                                <xmv-table :data="tableData" style="width: 100%">
                                    <xmv-table-column prop="date" label="Date" width="180" />
                                    <xmv-table-column prop="name" label="Name" width="180" />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </div>
                        `
        let code_2 =
                        `
                            <div>
                                <xmv-table :data="tableData" style="width: 100%" stripe>
                                    <xmv-table-column prop="date" label="Date" width="180" />
                                    <xmv-table-column prop="name" label="Name" width="180" />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </div>
                        `
        let code_3 =
                        `
                            <div>
                                <xmv-table :data="tableData" style="width: 100%" stripe border>
                                    <xmv-table-column prop="date" label="Date" width="180" />
                                    <xmv-table-column prop="name" label="Name" width="180" />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </div>
                        `
        let code_4 =
                        `
                            // JS
                            const tableData_1 = [
                                {
                                    date: '2016-05-03',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                    xmvTrStatus: 'success'
                                },
                                {
                                    date: '2016-05-02',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                    xmvTrStatus: 'warning'
                                },
                                {
                                    date: '2016-05-04',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                    xmvTrStatus: 'danger'
                                },
                                {
                                    date: '2016-05-01',
                                    name: 'Tom',
                                    address: 'No. 189, Grove St, Los Angeles',
                                    xmvTrStatus: 'error'
                                },
                            ]
                            // Template
                            <div>
                                <xmv-table :data="tableData_1" style="width: 100%" border>
                                    <xmv-table-column prop="date" label="Date" width="180" />
                                    <xmv-table-column prop="name" label="Name" width="180" />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </div>
                        `
        let code_5 =
                        `
                            <div>
                                <xmv-table :data="tableData_2" style="width: 100%" height="250">
                                    <xmv-table-column prop="date" label="Date" width="180" />
                                    <xmv-table-column prop="name" label="Name" width="180" />
                                    <xmv-table-column prop="address" label="Address" />
                                </xmv-table>
                            </div>
                        `
        let code_6 =
                        `
                            <div>
                                <xmv-table :data="tableData_3" style="width: 100%">
                                    <xmv-table-column prop="name1" label="name1" width="150" fixed/>
                                    <xmv-table-column prop="name2" label="name2" width="150" />
                                    <xmv-table-column prop="name3" label="name3" width="150"/>
                                    <xmv-table-column prop="name4" label="name4" width="150"/>
                                    <xmv-table-column prop="name5" label="name5" width="150"/>
                                    <xmv-table-column prop="name6" label="name6" width="150"/>
                                    <xmv-table-column prop="name7" label="name7" width="150"/>
                                    <xmv-table-column prop="name8" label="name8" width="150" fixed="right"/>
                                </xmv-table>
                            </div>
                        `
        let code_7 =
                        `
                            <div>
                                <xmv-table :data="tableData_3" style="width: 100%" height="200">
                                    <xmv-table-column prop="name1" label="name1" width="150" fixed/>
                                    <xmv-table-column prop="name2" label="name2" width="150" />
                                    <xmv-table-column prop="name3" label="name3" width="150"/>
                                    <xmv-table-column prop="name4" label="name4" width="150"/>
                                    <xmv-table-column prop="name5" label="name5" width="150"/>
                                    <xmv-table-column prop="name6" label="name6" width="150"/>
                                    <xmv-table-column prop="name7" label="name7" width="150"/>
                                    <xmv-table-column prop="name8" label="name8" width="150" fixed="right"/>
                                </xmv-table>
                            </div>
                        `
        let code_8 =
                        `
                            // JS
                            const onAddItem = ()=>{
                                tableData_4.value.push({name1 : new Date().getTime(),
                                    name2 : 'name2',name3 : 'name3',name4 : 'name4',
                                    name5 : 'name5',name6 : 'name6',name7 : 'name7',name8 : 'name8'})
                            }
                            const handleDelete = (data)=>{
                                tableData_4.value.splice(data.xmvSortIndex, 1)
                            }
                            // Template
                            <div>
                                <xmv-table :data="tableData_4" style="width: 100%" max-height="200">
                                    <xmv-table-column prop="name1" label="name1" width="150" fixed/>
                                    <xmv-table-column prop="name2" label="name2" width="150" />
                                    <xmv-table-column prop="name3" label="name3" width="150"/>
                                    <xmv-table-column prop="name4" label="name4" width="150"/>
                                    <xmv-table-column prop="name5" label="name5" width="150"/>
                                    <xmv-table-column prop="name6" label="name6" width="150"/>
                                    <xmv-table-column prop="name7" label="name7" width="150"/>
                                    <xmv-table-column prop="name8" label="name8" width="150" fixed="right">
                                        <template #default="{props}">
                                            <xmv-button link type="primary" size="small"
                                                @click="handleDelete(props.data)">Delete</xmv-button>
                                        </template>
                                    </xmv-table-column>
                                </xmv-table>
                                <xmv-button style="width: 100%;margin-top:10px;" @click="onAddItem">Add Item</xmv-button>
                            </div>
                        `
        let code_9 =
                        `
                            <div>
                                <xmv-table :data="tableData" style="width: 100%" highlight-current-row>
                                    <xmv-table-column type="index" width="56"></xmv-table-column>
                                    <xmv-table-column prop="name" label="name" />
                                    <xmv-table-column prop="date" label="date"  />
                                    <xmv-table-column prop="address" label="address" />
                                </xmv-table>
                            </div>
                        `
        let code_10 =
                        `
                            <div>
                                <xmv-table :data="tableData_2" style="width: 100%" height="250">
                                    <xmv-table-column type="checkbox" width="55" />
                                    <xmv-table-column prop="name" label="name" />
                                    <xmv-table-column prop="date" label="date"  />
                                    <xmv-table-column prop="address" label="address" show-overflow-tooltip/>
                                </xmv-table>
                            </div>
                        `
        let code_11 =
                        `
                            <div>
                                <xmv-table :data="tableData_2" height="250">
                                    <xmv-table-column prop="name" label="name" sortable/>
                                    <xmv-table-column prop="date" label="date"  sortable/>
                                    <xmv-table-column prop="address" label="address"/>
                                </xmv-table>
                            </div>
                        `
        let code_12 =
                        `
                            <div>
                                <xmv-table :data="tableData_2" height="250">
                                    <xmv-table-column prop="name" label="name" sortable>
                                        <template #default="{props}">
                                            <xmv-tag>{{ props.data.name }}</xmv-tag>
                                        </template>
                                    </xmv-table-column>
                                    <xmv-table-column prop="date" label="date"  sortable/>
                                    <xmv-table-column prop="address" label="address"/>
                                </xmv-table>
                            </div>
                        `
        let code_13 =
                        `
                            <div>
                                <xmv-table :data="tableData_2" height="350">
                                    <xmv-table-column type="expand" width="55">
                                        <template #default="{props}">
                                            <xmv-tag>{{ props.data.name }}</xmv-tag>
                                        </template>
                                    </xmv-table-column>
                                    <xmv-table-column prop="date" label="date"/>
                                    <xmv-table-column prop="address" label="address"/>
                                </xmv-table>
                            </div>
                        `
        let code_14 =
                        `
                            // JS
                            const tableData_6 = ref([
                                {
                                    date: '2016-05-03',
                                    name: 'Cat',
                                    address: 'No. 189, Grove StNo. 189'
                                },
                                {
                                    date: '2016-05-03',
                                    name: 'Alex',
                                    address: 'No. 189, Grove St'
                                },
                                
                                {
                                    date: '2016-05-03',
                                    name: 'Bob',
                                    address: 'No. 189, Grove St',
                                    hasChildren : true,
                                    children : [
                                        {
                                            date: '2016-05-03111',
                                            name: 'Bob1',
                                            address: 'No. 189, Grove St111',
                                        },
                                        {
                                            date: '2016-05-03111',
                                            name: 'Bob2',
                                            address: 'No. 189, Grove St111',
                                        },
                                        {
                                            date: '2016-05-03111',
                                            name: 'Bob3',
                                            address: 'No. 189, Grove St111'
                                        }
                                    ]
                                },
                                {
                                    date: '2016-05-03',
                                    name: 'Dong',
                                    address: 'No. 189, Grove St'
                                }
                            ])
                            const load = ()=>{
                                return new Promise((resolve ,reject)=>{
                                    setTimeout(() => {
                                        resolve(
                                            [
                                                {
                                                    date: '2016-05-03111',
                                                    name: 'Bob1',
                                                    address: 'No. 189, Grove St111',
                                                },
                                                {
                                                    date: '2016-05-03111',
                                                    name: 'Bob2',
                                                    address: 'No. 189, Grove St111',
                                                }
                                            ]
                                        )
                                    }, 3000);
                                })
                            }
                            <div>
                                <xmv-table :data="tableData_6">
                                    <xmv-table-column prop="name" label="name"></xmv-table-column>
                                    <xmv-table-column prop="date" label="date"/>
                                    <xmv-table-column prop="address" label="address"/>
                                </xmv-table>
                            </div>
                            <div style="margin-top:20px">
                                <xmv-table :data="tableData_6" lazy :load="load">
                                    <xmv-table-column prop="name" label="name"></xmv-table-column>
                                    <xmv-table-column prop="date" label="date"/>
                                    <xmv-table-column prop="address" label="address"/>
                                </xmv-table>
                            </div>
                        `
        return {tableData,tableData_1,tableData_2,tableData_3,tableData_4,tableData_5,tableData_6,
                code_1,code_2,code_3,code_4,code_5,code_6,code_7,code_8,code_9,code_10,code_11,code_12,
                code_13,code_14,
                load,onAddItem,handleDelete}
    }
})
</script>

<style lang="" scoped></style>
