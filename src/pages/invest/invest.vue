<template>
  <view class="invest-page p-xs">
    <view class="card0">
      <view class="label">Current balance</view>
      <view class="value m-t-xs">
        <view class="i-icon-usdt m-r-sm" />
        187,445
      </view>
    </view>
    <view class="card0 m-t">
      <view class="label">Purchased BTC</view>
      <view class="value m-t-xs">
        <view class="fa fa-btc m-r-sm" />
        24
      </view>
    </view>

    <view class="card1 m-t">
      <view class="item add-invest">
        <view class="label">Make an additional investment</view>
        <input class="input m-t-sm" type="digit" placeholder="0.0" v-model="addInvestAmount" @input="changeAddInvest" />
        <button size="mini" class="btn m-t-sm" @tap="addInvest">add</button>
      </view>
      <view class="item m-t">
        <view class="label">Reclaim investment</view>
        <button class="btn-reclaim-invest m-t" @tap="reclaimInvest">Reclaim investment</button>
      </view>
    </view>

    <view class="list m-t-lg">
      <view class="row tr">
        <view class="td">Frequency</view>
        <view class="td"><view class="i-icon-usdt" /></view>
        <view class="td"><text class="fa fa-btc" /> price </view>
        <view class="td"><text class="fa fa-btc" /> num</view>
        <view class="td">Time</view>
      </view>
      <view class="row">
        <view class="td">one week</view>
        <view class="td">10</view>
        <view class="td">1</view>
        <view class="td">8</view>
        <view class="td">3 hours ago</view>
      </view>
      <view class="row">
        <view class="td">one week</view>
        <view class="td">10</view>
        <view class="td">1</view>
        <view class="td">8</view>
        <view class="td">7 day ago</view>
      </view>
      <view class="row">
        <view class="td">one week</view>
        <view class="td">10</view>
        <view class="td">1</view>
        <view class="td">8</view>
        <view class="td">14 day ago</view>
      </view>
    </view>
  </view>
</template>
<script>
import './invest.scss'
export default {
  data() {
    return {
      freqList: [{ name: 'day' }, { name: 'week' }, { name: 'month' }, { name: 'year' }],
      addInvestAmount: 0
    }
  },
  methods: {
    changeAddInvest(e) {
      this.addInvestAmount = e.detail.value
    },
    addInvest() {
      uni.showToast({ title: 'Submit success', icon: 'success' })
      this.addInvestAmount = 0
    },
    reclaimInvest() {
      uni.showToast({ title: 'Submit success', icon: 'success' })
    }
  }
}
</script>