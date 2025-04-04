const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Behaviors.Physics,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{life: 0},
	{邊界約束: 0},
	{"8方向": 0},
	{Rocket: 0},
	{子彈: 0},
	{Alien: 0},
	{bullet: 0},
	{物理: 0},
	{Bullet: 0},
	{Mouse: 0},
	{score: 0}
];

self.InstanceType = {
	background: class extends self.ITiledBackgroundInstance {},
	Rocket: class extends self.ISpriteInstance {},
	Alien: class extends self.ISpriteInstance {},
	Bullet: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	score: class extends self.ITextInstance {},
	life: class extends self.ITextInstance {}
}