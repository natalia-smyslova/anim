export default class TooltipWidget {
  constructor(container) {
    this.container = container;
    this.onClick = this.onClick.bind(this);
  }

  static get markup() {
    return ` 
    <div class="button_container">
      <button type="button" class="showTooltip">Collapse</button>
      <div class="tooltip_container animation">
        <div class="message">And here's some amazing content. It's very engaging. Right? And here's some amazing content. It's very engaging. Right? And here's some amazing content. It's very engaging. Right? And here's some amazing content. It's very engaging. Right?</div>
      </div>
    </div>  
    `;
  }

  static get button() {
    return 'button';
  }

  bindToDom() {
    this.container.innerHTML = TooltipWidget.markup;

    this.button = this.container.querySelector(TooltipWidget.button);

    this.button.addEventListener('click', this.onClick);
  }

  onClick(e) {
    this.e = e.preventDefault();
    const tooltipContainer = document.querySelector('.tooltip_container');

    if (!tooltipContainer.classList.contains('active')) {
      tooltipContainer.classList.add('active');
    } else {
      tooltipContainer.classList.remove('active');
    }
  }
}
