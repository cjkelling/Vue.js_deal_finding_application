import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import SearchBar from '@/components/SearchBar.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("SearchBar.vue", () => {
  let state
  let store
  
  beforeEach(() => {
    state = {
      search: '',
      gallery: true
    }
    store = new Vuex.Store({
      state
    })
  })

  test("it shows on the page if in gallery view", () => {
    const wrapper = mount(SearchBar, { store, localVue });
    expect(wrapper.findAll('input').length).toEqual(1)
  })

  test("it does not show on the page if in detailed view", () => {
    store.state.gallery = false;
    const wrapper = mount(SearchBar, { store, localVue });
    expect(wrapper.findAll('input').length).toEqual(0)
  })

  test("its placeholder default is 'Try \"coffee\" or \"Walmart\"'", () => {
    const wrapper = mount(SearchBar, { store, localVue });
    expect(wrapper.find('input').html()).toContain('placeholder=\"Try &quot;coffee&quot; or &quot;Walmart&quot')
  })

  test("the value of 'search' updates with input value", () => {
    const wrapper = mount(SearchBar, { store, localVue });
    expect(store.state.search).toEqual('')
    wrapper.find('input').setValue('Food')
    expect(store.state.search).toEqual('Food')
  })
});
