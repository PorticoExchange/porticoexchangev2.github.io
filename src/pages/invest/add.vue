<template>
  <view class="invest-add-page p-xs">
    <view class="text-center">
      <view class="fa fa-btc" />
    </view>
    <view class="card1 m-t-lg">
      <view class="item">
        <view class="label">Investment frequency</view>
        <picker range-key="name" :range="freqList" :value="selectFreq" @change="changeFreq">
          <button size="mini" class="btn-freq m-t-sm">
            per {{ freqList[selectFreq].name }}
            <view class="fa fa-angle-down m-l-sm" />
          </button>
        </picker>
      </view>
      <view class="item m-t">
        <view class="label">Investment amount (USDT)</view>
        <input class="amount-val m-t-sm" type="digit" placeholder="0.0" @input="changeAmount" />
      </view>
      <button class="btn-submit m-t" @tap="goInvest">connect wallet & invest</button>
    </view>
    <view class="tip p-sm" v-if="amountTip">
      <view class="fa fa-info m-r-sm" />
      {{ amountTip }}
    </view>
  </view>
</template>
<script>
import './add.scss'
export default {
  data() {
    return {
      freqList: [{ name: 'day' }, { name: 'week' }, { name: 'month' }, { name: 'year' }],
      selectFreq: 0,
      investAmount: 0
    }
  },
  computed: {
    amountTip() {
      const selectFreq = this.selectFreq
      const amt = Number(this.investAmount) || 0
      if (!amt || selectFreq > 2) return ''

      let str = `Invest ${amt}USDT per ${this.freqList[selectFreq].name}`
      if (selectFreq === 0) {
        str += `, about ${amt.asBigNumber().times(7).toNumber()}USDT one week, about ${amt.asBigNumber().times(30).toNumber()}USDT one month`
      }
      if (selectFreq === 1) {
        str += `, about ${amt.asBigNumber().times(4).toNumber()}USDT one month, about ${amt.asBigNumber().times(52).toNumber()}USDT one year`
      }
      if (selectFreq === 2) {
        str += `, about ${amt.asBigNumber().times(12).toNumber()}USDT one year`
      }
      return str
    }
  },
  methods: {
    changeFreq(e) {
      this.selectFreq = e.detail.value
    },
    changeAmount(e) {
      this.investAmount = e.detail.value
    },
    goInvest() {
      uni.navigateTo({ url: '/pages/invest/invest' })
    }
  }
}
</script>