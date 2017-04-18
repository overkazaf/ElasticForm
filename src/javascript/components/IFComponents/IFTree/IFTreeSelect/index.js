import IFComponentBase from '../../IFComponentBase/index.js';
import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;

export default
class IFTreeSelect extends IFComponentBase {

  onChange = (value) => {
    this.setValue(value);
  }

  render() {

    let {
      option
    } = this.state;

    let {
      value,
    } = option.toJS();

    return (
      <TreeSelect
        showSearch
        style={{ width: 200 }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="兔巢科技" title="兔巢科技" key="0-1">
          <TreeNode value="UED中心" title="UED中心" key="0-1-1">
            <TreeNode value="UED1" title="UED1" key="random" />
            <TreeNode value="UED2" title="UED2" key="random1" />
          </TreeNode>
          <TreeNode value="平台研发中心" title="平台研发中心" key="random2">
            <TreeNode value="John Doe" title={<b style={{ color: '#08c' }}>John Doe</b>} key="random3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}