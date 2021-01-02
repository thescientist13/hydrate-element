class HydrateElement extends HTMLElement {
  
  constructor(){
    super();
  }

  async rehydrate(context, hydrateFunction){
    if (context.shadowRoot.getRootNode().host.children.length > 0) {
      await hydrateFunction(context);
    }
  }
}

export { HydrateElement };