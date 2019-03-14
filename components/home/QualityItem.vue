<template>
	<div class="certificate-container col-12 col-sm-6 col-lg-3">
		<div class="certificate">
      <img class="image" src="@/assets/img/test_image.jpeg">
    </div>
		<div class="text-container">
			<p class="certificate-title">{{certificate.fields.title}}</p>
			<span class="certificate-text">{{certificate.fields.text}}</span>
		</div>
	</div>
</template>

<script>
  export default {
   name: 'quality-item',
   props: {
     certificate: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.certificate-container {
  display: flex;
  flex-direction: column;
  padding-bottom: $width-unit * 3;

 @include media-breakpoint-up(md) {
  padding-bottom: $width-unit;
 }

 @include media-breakpoint-up(lg) {
   padding-left: $content-left / 5;
   padding-right: $content-left / 5;
   padding-bottom: 0px;
 }

 @include media-breakpoint-up(xl) {
   padding-left: $content-left / 2.5;
   padding-right: $content-left / 2.5;
 }

 .text-container {
  padding-top: 1rem;

  @include media-breakpoint-up(md) {
    padding-left: 1rem;
  }

  @include media-breakpoint-up(lg) {
    width: 100%;
    padding: 0;
  }
}

.certificate {
 width: 50%;
 height: $width-unit * 6;
 overflow: hidden;

 .hero-image {
    object-fit: cover;
    height: 100%;
  }

 @include media-breakpoint-up(sm) {
  width: 100%;
  height: $width-unit * 4;
  padding: 20px;
}

@include media-breakpoint-up(lg) {
  height: $width-unit * 3;
  padding: 0;
  margin-bottom: $width-unit / 2;
}

@include media-breakpoint-up(xl) {
  height: 200px;
  padding: 0;
  margin-bottom: 0;
}
}

.certificate-title {
 padding-top: 0;
 position: relative;

 @include media-breakpoint-up(sm) {
  padding-top: $content-left / 3;
}

@include media-breakpoint-up(lg) {
  margin-left: 0;
  padding-top: 0;

  &:after {
    content: '';
    position: absolute;
    top: calc(#{$content-left} - 2rem;);
    left:0;
    width: 20%;
    height: 2px;
    background: black;

    @include media-breakpoint-up(xl) {
     top: calc(#{$content-left} - 1rem;);
   }
 }
}

@include media-breakpoint-up(xl) {
  padding-top: $content-left;
}
}

.certificate-text {
 margin: 0;
 padding-left: 0;
 @include media-breakpoint-up(sm) {
  margin-left: 10px;
  padding: 0;
}

@include media-breakpoint-up(lg) {
  margin: 0;
}
}
}
</style>