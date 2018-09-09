import connectedposts from '../../../components/posts/Posts';

const mockStore = configureStore();

it('render OK', () => {
  const store = mockStore({ post: [] });

  const wrapper = render(<connectedposts store={store} post={[]} />);
  expect(wrapper).toMatchSnapshot();
});
