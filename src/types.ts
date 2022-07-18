type IdDisplay = {
    id: string,
    display: string
  }
  const list: IdDisplay[] = [
    {
      id: 'bar',
      display: 'bar Select'
    },
    {
      id: 'foo',
      display: 'Foo Select'
    },
  ]
  
  const fooIndex = list.map(i => i.id).indexOf('foo');
  console.log(fooIndex); // 0