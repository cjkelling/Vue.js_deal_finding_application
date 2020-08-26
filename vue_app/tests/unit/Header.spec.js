import Header from '@/components/Header.vue'
import { mount } from '@vue/test-utils'

describe('Header.vue', () =>{
  test('shopping logo appears on page', () => {
    const wrapper = mount(Header)
    expect(wrapper.contains('img')).toBe(true)
  })
})
