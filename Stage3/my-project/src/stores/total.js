export default {
    state: {
        sum: 0,
        checkedAll: false
    },
    setSumText(newValue) {
        this.state.sum = newValue
    },
    setCheckedAll(newValue) {
        this.state.checkedAll = newValue
    }
}