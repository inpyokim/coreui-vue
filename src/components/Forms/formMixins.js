import safeIdMixin from '../../mixins/safeId'
export const safeId = safeIdMixin
export const wrapperComputedProps = {
  computed: {
    isHorizontal () {
      return Boolean(this.horizontal)
    },
    haveInputGroup () {
      return Boolean(this.tooltipFeedback || this.append ||
         this.prepend || this.$slots.append || this.$slots.prepend)
    },
    haveWrapper () {
      return this.haveInputGroup ||
             Boolean(this.addWrapperClasses || this.isHorizontal)
    },
    wrapperClasses () {
      if(this.haveWrapper)
        return [ this.addWrapperClasses, {
                 [this.horizontal.input || 'col-10'] : this.isHorizontal,
                 'input-group' : this.haveInputGroup
               }]
    }
  }
}

export const validationComputedProps = {
  computed: {
    computedIsValid () {
      if (typeof this.isValid === 'function')
        return this.isValid(this.state)
      return this.isValid
    },
    validationClass () {
      if (this.computedIsValid === null)
        return
      return this.computedIsValid ? 'is-valid' : 'is-invalid'
    }
  }
}

export const watchValue = {
  watch: {
    value (val, oldVal) {
      if (val !== oldVal)
        this.state = val
    },
  }
}

export const classesComputedProps = {
  computed: {
    haveCustomSize () {
      return ['','sm','lg'].includes(this.size) && Boolean(this.size)
    },
    computedClasses () {
      return [
               this.isHorizontal ? 'form-row': 'form-group',
               {
               'was-validated': this.wasValidated
               }
             ]
    },
    labelClasses () {
      return [ this.addLabelClasses, {
               'col-form-label': this.isHorizontal,
               [this.horizontal.label || 'col-2']: this.isHorizontal,
               [`col-form-label-${this.size}`]: this.haveCustomSize,
             }]
    },
    customSizeClass () {
      return this.haveCustomSize ? `form-control-${this.size}` : null
    },
    inputClasses () {
      return [
        this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
        this.validationClass,
        this.addInputClasses,
        this.customSizeClass
      ]
    }
  }
}