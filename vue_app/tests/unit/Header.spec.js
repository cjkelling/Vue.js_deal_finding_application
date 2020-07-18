import Header from '@/components/Header.vue'
import { mount } from '@vue/test-utils'

describe('Header', () =>{
  test('Ibotta logo appears on page', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toContain('<img src=\"../assets/IbottaLogo_Primary_Pink.png\" class=\"logo-image\">')
  })
})
