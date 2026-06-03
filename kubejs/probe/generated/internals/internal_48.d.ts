/// <reference path="./internal_*.d.ts" />
declare namespace com.chaosthedude.naturescompass.util {
    class CompassState extends Internal.Enum<com.chaosthedude.naturescompass.util.CompassState> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        "compareTo(com.chaosthedude.naturescompass.util.CompassState)"(arg0: com.chaosthedude.naturescompass.util.CompassState_): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<com.chaosthedude.naturescompass.util.CompassState>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static fromID(arg0: number): com.chaosthedude.naturescompass.util.CompassState;
        name(): string;
        static values(): com.chaosthedude.naturescompass.util.CompassState[];
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): com.chaosthedude.naturescompass.util.CompassState;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        compareTo(arg0: com.chaosthedude.naturescompass.util.CompassState_): number;
        getDeclaringClass(): typeof com.chaosthedude.naturescompass.util.CompassState;
        getID(): number;
        get class(): typeof any
        get declaringClass(): typeof com.chaosthedude.naturescompass.util.CompassState
        get ID(): number
        static readonly INACTIVE: (com.chaosthedude.naturescompass.util.CompassState) & (com.chaosthedude.naturescompass.util.CompassState);
        static readonly FOUND: (com.chaosthedude.naturescompass.util.CompassState) & (com.chaosthedude.naturescompass.util.CompassState);
        static readonly SEARCHING: (com.chaosthedude.naturescompass.util.CompassState) & (com.chaosthedude.naturescompass.util.CompassState);
        static readonly NOT_FOUND: (com.chaosthedude.naturescompass.util.CompassState) & (com.chaosthedude.naturescompass.util.CompassState);
    }
    type CompassState_ = "inactive" | "found" | "searching" | "not_found" | CompassState;
}
declare namespace Internal {
    class QuantumCluster implements Internal.IAECluster, Internal.IActionHost {
        constructor(arg0: BlockPos_, arg1: BlockPos_)
        getClass(): typeof any;
        toString(): string;
        isCorner(arg0: Internal.QuantumBridgeBlockEntity_): boolean;
        setUpdateStatus(arg0: boolean): void;
        getBoundsMin(): BlockPos;
        notifyAll(): void;
        destroy(): void;
        updateStatus(arg0: boolean): void;
        getBlockEntities(): Internal.Iterator<Internal.QuantumBridgeBlockEntity>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getActionableNode(): Internal.IGridNode;
        getCenter(): Internal.QuantumBridgeBlockEntity;
        hashCode(): number;
        getBoundsMax(): BlockPos;
        wait(): void;
        wait(arg0: number): void;
        isDestroyed(): boolean;
        equals(arg0: any): boolean;
        onUnload(arg0: Internal.LevelEvent$Unload_): void;
        get class(): typeof any
        set updateStatus(arg0: boolean)
        get boundsMin(): BlockPos
        get blockEntities(): Internal.Iterator<Internal.QuantumBridgeBlockEntity>
        get actionableNode(): Internal.IGridNode
        get center(): Internal.QuantumBridgeBlockEntity
        get boundsMax(): BlockPos
        get destroyed(): boolean
    }
    type QuantumCluster_ = QuantumCluster;
    class CommandContextBuilder <S> {
        constructor(arg0: Internal.CommandDispatcher_<S>, arg1: S, arg2: Internal.CommandNode_<S>, arg3: number)
        getNodes(): Internal.List<Internal.ParsedCommandNode<S>>;
        getClass(): typeof any;
        withArgument(arg0: string, arg1: Internal.ParsedArgument_<S, any>): this;
        withChild(arg0: Internal.CommandContextBuilder_<S>): this;
        notify(): void;
        findSuggestionContext(arg0: number): Internal.SuggestionContext<S>;
        wait(arg0: number, arg1: number): void;
        getDispatcher(): Internal.CommandDispatcher<S>;
        withCommand(arg0: Internal.Command_<S>): this;
        getRootNode(): Internal.CommandNode<S>;
        withNode(arg0: Internal.CommandNode_<S>, arg1: Internal.StringRange_): this;
        getChild(): this;
        build(arg0: string): Internal.CommandContext<S>;
        toString(): string;
        notifyAll(): void;
        getArguments(): Internal.Map<string, Internal.ParsedArgument<S, any>>;
        copy(): this;
        getSource(): S;
        withSource(arg0: S): this;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getCommand(): Internal.Command<S>;
        getLastChild(): this;
        equals(arg0: any): boolean;
        getRange(): Internal.StringRange;
        get nodes(): Internal.List<Internal.ParsedCommandNode<S>>
        get class(): typeof any
        get dispatcher(): Internal.CommandDispatcher<S>
        get rootNode(): Internal.CommandNode<S>
        get child(): Internal.CommandContextBuilder<S>
        get "arguments"(): Internal.Map<string, Internal.ParsedArgument<S, any>>
        get source(): S
        get command(): Internal.Command<S>
        get lastChild(): Internal.CommandContextBuilder<S>
        get range(): Internal.StringRange
    }
    type CommandContextBuilder_<S> = CommandContextBuilder<S>;
    class Cursor implements Internal.Serializable {
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static getSystemCustomCursor(arg0: string): Internal.Cursor;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        static getPredefinedCursor(arg0: number): Internal.Cursor;
        getType(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        static getDefaultCursor(): Internal.Cursor;
        get class(): typeof any
        get type(): number
        get name(): string
        get defaultCursor(): Internal.Cursor
        static readonly SW_RESIZE_CURSOR: (4) & (number);
        static readonly NE_RESIZE_CURSOR: (7) & (number);
        static readonly W_RESIZE_CURSOR: (10) & (number);
        static readonly DEFAULT_CURSOR: (0) & (number);
        static readonly MOVE_CURSOR: (13) & (number);
        static readonly CROSSHAIR_CURSOR: (1) & (number);
        static readonly N_RESIZE_CURSOR: (8) & (number);
        static readonly TEXT_CURSOR: (2) & (number);
        static readonly WAIT_CURSOR: (3) & (number);
        static readonly CUSTOM_CURSOR: (-1) & (number);
        static readonly S_RESIZE_CURSOR: (9) & (number);
        static readonly HAND_CURSOR: (12) & (number);
        static readonly SE_RESIZE_CURSOR: (5) & (number);
        static readonly NW_RESIZE_CURSOR: (6) & (number);
        static readonly E_RESIZE_CURSOR: (11) & (number);
    }
    type Cursor_ = Cursor;
    class UpgradeNextTierRecipe$Serializer extends Internal.RecipeWrapperSerializer<Internal.ShapedRecipe, Internal.UpgradeNextTierRecipe> {
        constructor()
        getClass(): typeof any;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.UpgradeNextTierRecipe;
        toString(): string;
        notifyAll(): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.UpgradeNextTierRecipe;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.UpgradeNextTierRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.UpgradeNextTierRecipe_): void;
        get class(): typeof any
    }
    type UpgradeNextTierRecipe$Serializer_ = UpgradeNextTierRecipe$Serializer;
    class EntityModelSet implements Internal.ResourceManagerReloadListener {
        constructor()
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        bakeLayer(arg0: Internal.ModelLayerLocation_): Internal.ModelPart;
        hashCode(): number;
        wait(): void;
        getName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get class(): typeof any
        get name(): string
    }
    type EntityModelSet_ = EntityModelSet;
    interface IIngredientManager$IIngredientListener {
        abstract onIngredientsAdded<V>(arg0: Internal.IIngredientHelper_<V>, arg1: Internal.Collection_<Internal.ITypedIngredient<V>>): void;
        abstract onIngredientsRemoved<V>(arg0: Internal.IIngredientHelper_<V>, arg1: Internal.Collection_<Internal.ITypedIngredient<V>>): void;
    }
    type IIngredientManager$IIngredientListener_ = IIngredientManager$IIngredientListener;
    /**
     * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
    */
    class ItemPickedUpEventJS extends Internal.PlayerEventJS {
        constructor(player: Internal.Player_, entity: Internal.ItemEntity_, stack: Internal.ItemStack_)
        getClass(): typeof any;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(): any;
        /**
         * The item entity that was picked up.
        */
        getItemEntity(): Internal.ItemEntity;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(value: any): any;
        toString(): string;
        /**
         * Removes the specified game stage from the player
        */
        removeGameStage(stage: string): void;
        /**
         * The player that picked up the item.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was picked up.
        */
        getItem(): Internal.ItemStack;
        notifyAll(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
        */
        exit(value: any): any;
        notify(): void;
        /**
         * Adds the specified game stage to the player
        */
        addGameStage(stage: string): void;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(value: any): any;
        hashCode(): number;
        wait(): void;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
        */
        cancel(): any;
        wait(arg0: number): void;
        getPlayer(): Internal.Player;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
        */
        success(): any;
        equals(arg0: any): boolean;
        /**
         * Checks if the player has the specified game stage
        */
        hasGameStage(stage: string): boolean;
        getServer(): Internal.MinecraftServer;
        get class(): typeof any
        /**
         * The item entity that was picked up.
        */
        get itemEntity(): Internal.ItemEntity
        /**
         * The player that picked up the item.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was picked up.
        */
        get item(): Internal.ItemStack
        get level(): Internal.Level
        get player(): Internal.Player
        get server(): Internal.MinecraftServer
    }
    type ItemPickedUpEventJS_ = ItemPickedUpEventJS;
    class BundleItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        static getFullnessDisplay(arg0: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly MAX_WEIGHT: (64) & (number);
    }
    type BundleItem_ = BundleItem;
    class TridentChannelingEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        getClass(): typeof any;
        getDamageProtection(arg0: number, arg1: DamageSource_): number;
        getFullname(arg0: number): net.minecraft.network.chat.Component;
        getRarity(): Internal.Enchantment$Rarity;
        isCompatibleWith(arg0: Internal.Enchantment_): boolean;
        isTradeable(): boolean;
        isTreasureOnly(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getMaxCost(arg0: number): number;
        isDiscoverable(): boolean;
        getMinCost(arg0: number): number;
        static byId(arg0: number): Internal.Enchantment;
        getDescriptionId(): string;
        doPostHurt(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        toString(): string;
        getMaxLevel(): number;
        doPostAttack(arg0: Internal.LivingEntity_, arg1: Internal.Entity_, arg2: number): void;
        notifyAll(): void;
        getMinLevel(): number;
        getSlotItems(arg0: Internal.LivingEntity_): Internal.Map<Internal.EquipmentSlot, Internal.ItemStack>;
        /**
         * @deprecated
        */
        getDamageBonus(arg0: number, arg1: Internal.MobType_): number;
        hashCode(): number;
        isCurse(): boolean;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        wait(): void;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        wait(arg0: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_): boolean;
        equals(arg0: any): boolean;
        canEnchant(arg0: Internal.ItemStack_): boolean;
        isAllowedOnBooks(): boolean;
        get class(): typeof any
        get rarity(): Internal.Enchantment$Rarity
        get tradeable(): boolean
        get treasureOnly(): boolean
        get discoverable(): boolean
        get descriptionId(): string
        get maxLevel(): number
        get minLevel(): number
        get curse(): boolean
        get allowedOnBooks(): boolean
    }
    type TridentChannelingEnchantment_ = TridentChannelingEnchantment;
    abstract class StoredUserEntry <T> {
        constructor(arg0: T)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type StoredUserEntry_<T> = StoredUserEntry<T>;
    interface Char2CharFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<string, string> {
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Char2ObjectFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2CharFunction<T>;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2CharFunction<T>;
        abstract "get(char)"(arg0: string): string;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Character)"(arg0: any, arg1: string): string;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        put(arg0: string, arg1: string): string;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        containsKey(arg0: string): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, string>;
        "getOrDefault(char,char)"(arg0: string, arg1: string): string;
        getOrDefault(arg0: string, arg1: string): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Char2LongFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        "remove(char)"(arg0: string): string;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<string, T>): Internal.Function<string, T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<string, T>;
        apply(arg0: string): string;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2CharFunction;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Char2ShortFunction;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Character,java.lang.Character)"(arg0: string, arg1: string): string;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Char2DoubleFunction;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Char2FloatFunction;
        "containsKey(char)"(arg0: string): boolean;
        remove(arg0: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Char2ByteFunction;
        "put(char,char)"(arg0: string, arg1: string): string;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Char2IntFunction;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Char2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        defaultReturnValue(arg0: string): void;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2CharFunction;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: string): string;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, string>;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2CharFunction;
        size(): number;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2CharFunction;
        identity(): this;
        clear(): void;
        abstract get(arg0: string): string;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2CharFunction;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
    }
    type Char2CharFunction_ = Char2CharFunction;
    class MenuShortcut implements Internal.Serializable {
        constructor(arg0: number, arg1: boolean)
        constructor(arg0: number)
        getClass(): typeof any;
        toString(): string;
        getKey(): number;
        notifyAll(): void;
        "equals(java.awt.MenuShortcut)"(arg0: Internal.MenuShortcut_): boolean;
        usesShiftModifier(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        equals(arg0: Internal.MenuShortcut_): boolean;
        wait(): void;
        wait(arg0: number): void;
        "equals(java.lang.Object)"(arg0: any): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get key(): number
    }
    type MenuShortcut_ = MenuShortcut;
    class JukeboxBlockEntity extends Internal.BlockEntity implements Internal.ContainerSingleItem, Internal.Clearable {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        setRecordWithoutPlaying(arg0: Internal.ItemStack_): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        startPlaying(): void;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getType(): Internal.BlockEntityType<any>;
        static "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,int)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getItem(arg0: number): Internal.ItemStack;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        startOpen(arg0: Internal.Player_): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        removeFirstItem(): Internal.ItemStack;
        clearRemoved(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getHeight(): number;
        sdl$getDynamicLightX(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        clear(): void;
        wait(arg0: number): void;
        abstract clearContent(): void;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getFirstItem(): Internal.ItemStack;
        getBlockPos(): BlockPos;
        getSlots(): number;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        setFirstItem(arg0: Internal.ItemStack_): void;
        onLoad(): void;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        popOutRecord(): void;
        isRecordPlaying(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        isEmpty(): boolean;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        sdl$getDynamicLightZ(): number;
        getStackInSlot(slot: number): Internal.ItemStack;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        static playRecordTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.JukeboxBlockEntity_): void;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        static "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,double)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        set recordWithoutPlaying(arg0: Internal.ItemStack_)
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get renderBoundingBox(): Internal.AABB
        get class(): typeof any
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get firstItem(): Internal.ItemStack
        get blockPos(): BlockPos
        get slots(): number
        get removed(): boolean
        set firstItem(arg0: Internal.ItemStack_)
        get containerSize(): number
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get recordPlaying(): boolean
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
    }
    type JukeboxBlockEntity_ = JukeboxBlockEntity;
    class OpticalPipeProperties {
        constructor()
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly INSTANCE: (Internal.OpticalPipeProperties) & (Internal.OpticalPipeProperties);
    }
    type OpticalPipeProperties_ = OpticalPipeProperties;
    interface IForgeMobEffect {
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type IForgeMobEffect_ = IForgeMobEffect;
    interface IntegerPropertyAccessor {
        abstract gtceu$getMax(): number;
        abstract gtceu$getMin(): number;
    }
    type IntegerPropertyAccessor_ = IntegerPropertyAccessor;
    interface FluidStorage {
        abstract get(arg0: Internal.FluidStorageKey_): Internal.Fluid;
        abstract getQueuedBuilder(arg0: Internal.FluidStorageKey_): GTFluidBuilder;
        abstract getEntry(arg0: Internal.FluidStorageKey_): Internal.FluidStorage$FluidEntry;
        abstract enqueueRegistration(arg0: Internal.FluidStorageKey_, arg1: GTFluidBuilder_): void;
        abstract store(arg0: Internal.FluidStorageKey_, arg1: Internal.Supplier_<Internal.Fluid>, arg2: GTFluidBuilder_): void;
    }
    type FluidStorage_ = FluidStorage;
    class NarratorStatus extends Internal.Enum<Internal.NarratorStatus> {
        getClass(): typeof any;
        shouldNarrateSystem(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static valueOf(arg0: string): Internal.NarratorStatus;
        static values(): Internal.NarratorStatus[];
        getId(): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getName(): net.minecraft.network.chat.Component;
        toString(): string;
        getDeclaringClass(): typeof Internal.NarratorStatus;
        static byId(arg0: number): Internal.NarratorStatus;
        notifyAll(): void;
        name(): string;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        shouldNarrateChat(): boolean;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.NarratorStatus>>;
        compareTo(arg0: Internal.NarratorStatus_): number;
        "compareTo(net.minecraft.client.NarratorStatus)"(arg0: Internal.NarratorStatus_): number;
        get class(): typeof any
        get id(): number
        get name(): net.minecraft.network.chat.Component
        get declaringClass(): typeof Internal.NarratorStatus
        static readonly SYSTEM: (Internal.NarratorStatus) & (Internal.NarratorStatus);
        static readonly ALL: (Internal.NarratorStatus) & (Internal.NarratorStatus);
        static readonly CHAT: (Internal.NarratorStatus) & (Internal.NarratorStatus);
        static readonly OFF: (Internal.NarratorStatus) & (Internal.NarratorStatus);
    }
    type NarratorStatus_ = "chat" | NarratorStatus | "off" | "system" | "all";
    interface CropBlockBuilder$SurviveCallback {
        abstract survive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        (arg0: Internal.BlockState, arg1: Internal.LevelReader, arg2: BlockPos): boolean;
    }
    type CropBlockBuilder$SurviveCallback_ = ((arg0: Internal.BlockState, arg1: Internal.LevelReader, arg2: BlockPos)=> boolean) | CropBlockBuilder$SurviveCallback;
    interface LootItemFunction$Builder {
        abstract build(): Internal.LootItemFunction;
        (): Internal.LootItemFunction_;
    }
    type LootItemFunction$Builder_ = (()=> Internal.LootItemFunction_) | LootItemFunction$Builder;
    class EndTag implements Internal.Tag {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        accept(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsString(): string;
        hashCode(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        copy(): this;
        wait(): void;
        write(arg0: Internal.DataOutput_): void;
        wait(arg0: number): void;
        getId(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        getType(): Internal.TagType<Internal.EndTag>;
        get class(): typeof any
        get asString(): string
        get id(): number
        get type(): Internal.TagType<Internal.EndTag>
        static readonly INSTANCE: (Internal.EndTag) & (Internal.EndTag);
        static readonly TYPE: Internal.TagType<Internal.EndTag>;
    }
    type EndTag_ = EndTag;
    class ItemEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.ItemEntity_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getEntity(): Internal.Entity;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get entity(): Internal.Entity
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ItemEvent_ = ItemEvent;
    class MutableHashedLinkedMap$BasicStrategy implements Internal.Hash$Strategy<any> {
        getClass(): typeof any;
        hashCode(arg0: any): number;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        equals(arg0: any, arg1: any): boolean;
        get class(): typeof any
    }
    type MutableHashedLinkedMap$BasicStrategy_ = MutableHashedLinkedMap$BasicStrategy;
    interface AccessorAbstractFurnaceBlockEntity {
        abstract getItems(): Internal.NonNullList<Internal.ItemStack>;
        get items(): Internal.NonNullList<Internal.ItemStack>
        (): Internal.NonNullList_<Internal.ItemStack>;
    }
    type AccessorAbstractFurnaceBlockEntity_ = AccessorAbstractFurnaceBlockEntity | (()=> Internal.NonNullList_<Internal.ItemStack>);
    class ConfigManager implements Internal.IConfigManager {
        constructor(arg0: Internal.Runnable_)
        constructor(arg0: Internal.IConfigManagerListener_)
        getClass(): typeof any;
        getSetting<T extends Internal.Enum<T>>(arg0: Internal.Setting_<T>): T;
        toString(): string;
        notifyAll(): void;
        writeToNBT(arg0: Internal.CompoundTag_): void;
        putSetting<T extends Internal.Enum<T>>(arg0: Internal.Setting_<T>, arg1: T): void;
        notify(): void;
        registerSetting<T extends Internal.Enum<T>>(arg0: Internal.Setting_<T>, arg1: T): void;
        wait(arg0: number, arg1: number): void;
        getSettings(): Internal.Set<Internal.Setting<any>>;
        hashCode(): number;
        readFromNBT(arg0: Internal.CompoundTag_): boolean;
        hasSetting(arg0: Internal.Setting_<any>): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get settings(): Internal.Set<Internal.Setting<any>>
    }
    type ConfigManager_ = ConfigManager;
    class Polygon implements Internal.Shape, Internal.Serializable {
        constructor()
        constructor(arg0: number[], arg1: number[], arg2: number)
        getClass(): typeof any;
        contains(arg0: number, arg1: number): boolean;
        addPoint(arg0: number, arg1: number): void;
        "contains(int,int)"(arg0: number, arg1: number): boolean;
        getBounds(): Internal.Rectangle;
        contains(arg0: Internal.Point_): boolean;
        intersects(arg0: Internal.Rectangle2D_): boolean;
        "contains(double,double)"(arg0: number, arg1: number): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getPathIterator(arg0: Internal.AffineTransform_, arg1: number): Internal.PathIterator;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        /**
         * @deprecated
        */
        getBoundingBox(): Internal.Rectangle;
        "contains(java.awt.Point)"(arg0: Internal.Point_): boolean;
        getBounds2D(): Internal.Rectangle2D;
        reset(): void;
        contains(arg0: Internal.Rectangle2D_): boolean;
        toString(): string;
        "contains(java.awt.geom.Point2D)"(arg0: Internal.Point2D_): boolean;
        /**
         * @deprecated
        */
        inside(arg0: number, arg1: number): boolean;
        notifyAll(): void;
        getPathIterator(arg0: Internal.AffineTransform_): Internal.PathIterator;
        invalidate(): void;
        contains(arg0: Internal.Point2D_): boolean;
        translate(arg0: number, arg1: number): void;
        "contains(java.awt.geom.Rectangle2D)"(arg0: Internal.Rectangle2D_): boolean;
        hashCode(): number;
        contains(arg0: number, arg1: number): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get bounds(): Internal.Rectangle
        /**
         * @deprecated
        */
        get boundingBox(): Internal.Rectangle
        get bounds2D(): Internal.Rectangle2D
        npoints: number;
        ypoints: number[];
        xpoints: number[];
    }
    type Polygon_ = Polygon;
    interface RuleBlockEntityModifier {
        abstract getType(): Internal.RuleBlockEntityModifierType<any>;
        abstract apply(arg0: Internal.RandomSource_, arg1: Internal.CompoundTag_): Internal.CompoundTag;
        get type(): Internal.RuleBlockEntityModifierType<any>
        readonly CODEC: Internal.Codec<Internal.RuleBlockEntityModifier>;
    }
    type RuleBlockEntityModifier_ = RuleBlockEntityModifier;
    class HolderSet$Named <T> extends Internal.HolderSet$ListBacked<T> {
        getClass(): typeof any;
        unwrapKey(): Internal.Optional<Internal.TagKey<T>>;
        /**
         * @deprecated
        */
        static emptyNamed<T>(arg0: Internal.HolderOwner_<T>, arg1: Internal.TagKey_<T>): Internal.HolderSet$Named<T>;
        static "direct(java.util.function.Function,java.util.List)"<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
        notify(): void;
        stream(): Internal.Stream<Internal.Holder<T>>;
        wait(arg0: number, arg1: number): void;
        static "direct(net.minecraft.core.Holder[])"<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        contains(arg0: Internal.Holder_<T>): boolean;
        static direct<T>(...arg0: Internal.Holder_<T>[]): Internal.HolderSet$Direct<T>;
        addInvalidationListener(arg0: Internal.Runnable_): void;
        getRandomElement(arg0: Internal.RandomSource_): Internal.Optional<Internal.Holder<T>>;
        bind(arg0: Internal.List_<Internal.Holder<T>>): void;
        key(): Internal.TagKey<T>;
        unwrap(): Internal.Either<Internal.TagKey<T>, Internal.List<Internal.Holder<T>>>;
        iterator(): Internal.Iterator<Internal.Holder<T>>;
        toString(): string;
        serializationType(): Internal.IForgeHolderSet$SerializationType;
        get(arg0: number): Internal.Holder<T>;
        notifyAll(): void;
        spliterator(): Internal.Spliterator<Internal.Holder<T>>;
        static "direct(java.util.function.Function,java.lang.Object[])"<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        canSerializeIn(arg0: Internal.HolderOwner_<T>): boolean;
        size(): number;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, ...arg1: E[]): Internal.HolderSet$Direct<T>;
        hashCode(): number;
        forEach(arg0: Internal.Consumer_<Internal.Holder<T>>): void;
        static direct<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        wait(): void;
        wait(arg0: number): void;
        static "direct(java.util.List)"<T>(arg0: Internal.List_<Internal.Holder<T>>): Internal.HolderSet$Direct<T>;
        static direct<E, T>(arg0: Internal.Function_<E, Internal.Holder<T>>, arg1: Internal.List_<E>): Internal.HolderSet$Direct<T>;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type HolderSet$Named_<T> = HolderSet$Named<T>;
    class WaypointGroup extends Internal.WaypointBase<Internal.WaypointGroup> {
        constructor(arg0: string, arg1: string, arg2: string)
        constructor(arg0: string, arg1: string)
        getClass(): typeof any;
        setDirty(arg0: boolean): this;
        getDisplayType(): Internal.DisplayType;
        setBackgroundColor(arg0: number): this;
        clearDisplayDimensions(): this;
        setDisplayDimensions(...arg0: string[]): this;
        setDisplayed(arg0: string, arg1: boolean): void;
        setName(arg0: string): this;
        getIcon(): Internal.MapImage;
        setDisplayOrder(arg0: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        getBackgroundColor(): number;
        clearIcon(): this;
        getName(): string;
        hasIcon(): boolean;
        setDirty(): this;
        getDisplayOrder(): number;
        compareTo(arg0: Internal.Displayable_): number;
        toString(): string;
        static clampRGB(arg0: number): number;
        notifyAll(): void;
        setDefaultDisplay(arg0: Internal.IWaypointDisplay_): this;
        getModId(): string;
        isDirty(): boolean;
        hasBackgroundColor(): boolean;
        getId(): string;
        setColor(arg0: number): this;
        hashCode(): number;
        clearBackgroundColor(): this;
        isDisplayed(arg0: string): boolean;
        clearColor(): this;
        hasColor(): boolean;
        wait(): void;
        wait(arg0: number): void;
        getColor(): number;
        "compareTo(journeymap.client.api.display.Displayable)"(arg0: Internal.Displayable_): number;
        getGuid(): string;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDisplayDimensions(): string[];
        hasDisplayDimensions(): boolean;
        setIcon(arg0: Internal.MapImage_): this;
        static clampOpacity(arg0: number): number;
        get class(): typeof any
        set dirty(arg0: boolean)
        get displayType(): Internal.DisplayType
        set backgroundColor(arg0: number)
        set displayDimensions(...arg0: string[])
        set name(arg0: string)
        get icon(): Internal.MapImage
        set displayOrder(arg0: number)
        get backgroundColor(): number
        get name(): string
        get displayOrder(): number
        set defaultDisplay(arg0: Internal.IWaypointDisplay_)
        get modId(): string
        get dirty(): boolean
        get id(): string
        set color(arg0: number)
        get color(): number
        get guid(): string
        get displayDimensions(): string[]
        set icon(arg0: Internal.MapImage_)
        static readonly VERSION: (1.4) & (number);
    }
    type WaypointGroup_ = WaypointGroup;
    class BlockOversizeInterface extends Internal.BlockBaseGui<Internal.TileOversizeInterface> {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        static fixtureProps(): Internal.BlockBehaviour$Properties;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "openGui(com.glodblock.github.extendedae.common.tileentities.TileOversizeInterface,net.minecraft.world.entity.player.Player)"(arg0: Internal.TileOversizeInterface_, arg1: Internal.Player_): void;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getOrientation(arg0: Internal.BlockState_): Internal.BlockOrientation;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getOrientationStrategy(): Internal.IOrientationStrategy;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        openGui(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.Player_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        openGui(arg0: Internal.TileOversizeInterface_, arg1: Internal.Player_): void;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        getBlockEntityBlockState(arg0: Internal.BlockState_, arg1: Internal.BlockEntity_): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        onActivated(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Player_, arg3: Internal.InteractionHand_, arg4: Internal.ItemStack_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: number, arg2: number, arg3: number): Internal.TileOversizeInterface;
        static metalProps(): Internal.BlockBehaviour$Properties;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        setBlockEntity(arg0: typeof Internal.TileOversizeInterface, arg1: Internal.BlockEntityType_<Internal.TileOversizeInterface>, arg2: Internal.BlockEntityTicker_<Internal.TileOversizeInterface>, arg3: Internal.BlockEntityTicker_<Internal.TileOversizeInterface>): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        static defaultProps(arg0: Internal.MapColor_, arg1: SoundType_): Internal.BlockBehaviour$Properties;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        static stoneProps(): Internal.BlockBehaviour$Properties;
        static glassProps(): Internal.BlockBehaviour$Properties;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.TileOversizeInterface;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        "openGui(appeng.blockentity.AEBaseBlockEntity,net.minecraft.world.entity.player.Player)"(arg0: Internal.AEBaseBlockEntity_, arg1: Internal.Player_): void;
        check(arg0: Internal.TileOversizeInterface_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: Internal.BlockHitResult_, arg5: Internal.Player_): Internal.InteractionResult;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        getRegistryName(): ResourceLocation;
        getBlockEntityType(): Internal.BlockEntityType<Internal.TileOversizeInterface>;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get orientationStrategy(): Internal.IOrientationStrategy
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        get registryName(): ResourceLocation
        get blockEntityType(): Internal.BlockEntityType<Internal.TileOversizeInterface>
        set hasCollision(arg0: boolean)
    }
    type BlockOversizeInterface_ = BlockOversizeInterface;
    class SeagrassFeature extends Internal.Feature<Internal.ProbabilityFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.ProbabilityFeatureConfiguration>)
        getClass(): typeof any;
        place(arg0: Internal.FeaturePlaceContext_<Internal.ProbabilityFeatureConfiguration>): boolean;
        toString(): string;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.ProbabilityFeatureConfiguration, Internal.Feature<Internal.ProbabilityFeatureConfiguration>>>;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        hashCode(): number;
        wait(): void;
        place(arg0: Internal.ProbabilityFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type SeagrassFeature_ = SeagrassFeature;
    interface LayerLightEventListener extends Internal.LightEventListener {
        abstract getDataLayerData(arg0: Internal.SectionPos_): Internal.DataLayer;
        abstract checkBlock(arg0: BlockPos_): void;
        abstract runLightUpdates(): number;
        abstract setLightEnabled(arg0: Internal.ChunkPos_, arg1: boolean): void;
        abstract getLightValue(arg0: BlockPos_): number;
        updateSectionStatus(arg0: BlockPos_, arg1: boolean): void;
        "updateSectionStatus(net.minecraft.core.BlockPos,boolean)"(arg0: BlockPos_, arg1: boolean): void;
        abstract "updateSectionStatus(net.minecraft.core.SectionPos,boolean)"(arg0: Internal.SectionPos_, arg1: boolean): void;
        abstract hasLightWork(): boolean;
        abstract propagateLightSources(arg0: Internal.ChunkPos_): void;
        abstract updateSectionStatus(arg0: Internal.SectionPos_, arg1: boolean): void;
    }
    type LayerLightEventListener_ = LayerLightEventListener;
    class SculkCatalystBlockEntity$CatalystListener implements Internal.GameEventListener {
        constructor(arg0: Internal.BlockState_, arg1: Internal.PositionSource_)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        handleGameEvent(arg0: Internal.ServerLevel_, arg1: Internal.GameEvent_, arg2: Internal.GameEvent$Context_, arg3: Vec3d_): boolean;
        getSculkSpreader(): Internal.SculkSpreader;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getListenerSource(): Internal.PositionSource;
        getListenerRadius(): number;
        equals(arg0: any): boolean;
        getDeliveryMode(): Internal.GameEventListener$DeliveryMode;
        get class(): typeof any
        get sculkSpreader(): Internal.SculkSpreader
        get listenerSource(): Internal.PositionSource
        get listenerRadius(): number
        get deliveryMode(): Internal.GameEventListener$DeliveryMode
        static readonly PULSE_TICKS: (8) & (number);
    }
    type SculkCatalystBlockEntity$CatalystListener_ = SculkCatalystBlockEntity$CatalystListener;
    interface LightEventListener {
        abstract checkBlock(arg0: BlockPos_): void;
        abstract runLightUpdates(): number;
        abstract setLightEnabled(arg0: Internal.ChunkPos_, arg1: boolean): void;
        updateSectionStatus(arg0: BlockPos_, arg1: boolean): void;
        "updateSectionStatus(net.minecraft.core.BlockPos,boolean)"(arg0: BlockPos_, arg1: boolean): void;
        abstract "updateSectionStatus(net.minecraft.core.SectionPos,boolean)"(arg0: Internal.SectionPos_, arg1: boolean): void;
        abstract hasLightWork(): boolean;
        abstract propagateLightSources(arg0: Internal.ChunkPos_): void;
        abstract updateSectionStatus(arg0: Internal.SectionPos_, arg1: boolean): void;
    }
    type LightEventListener_ = LightEventListener;
    class RepeaterBlock extends Internal.DiodeBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static isDiode(arg0: Internal.BlockState_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        shouldPrioritize(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        isLocked(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly DELAY: (Internal.IntegerProperty) & (Internal.IntegerProperty);
        static readonly LOCKED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
    }
    type RepeaterBlock_ = RepeaterBlock;
    interface ByteBufferDestination {
        abstract writeBytes(data: Internal.ByteBuffer_): void;
        abstract drain(buf: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract writeBytes(data: number[], offset: number, length: number): void;
        abstract getByteBuffer(): Internal.ByteBuffer;
        get byteBuffer(): Internal.ByteBuffer
    }
    type ByteBufferDestination_ = ByteBufferDestination;
    class ConfiguredWorldCarver <WC extends Internal.CarverConfiguration> extends Internal.Record {
        constructor(arg0: Internal.WorldCarver_<WC>, arg1: WC)
        getClass(): typeof any;
        toString(): string;
        worldCarver(): Internal.WorldCarver<WC>;
        carve(arg0: Internal.CarvingContext_, arg1: Internal.ChunkAccess_, arg2: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg3: Internal.RandomSource_, arg4: Internal.Aquifer_, arg5: Internal.ChunkPos_, arg6: Internal.CarvingMask_): boolean;
        config(): WC;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        isStartChunk(arg0: Internal.RandomSource_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly DIRECT_CODEC: Internal.Codec<Internal.ConfiguredWorldCarver<any>>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        static readonly LIST_CODEC: Internal.Codec<Internal.HolderSet<Internal.ConfiguredWorldCarver<any>>>;
    }
    type ConfiguredWorldCarver_<WC extends Internal.CarverConfiguration> = Special.ConfiguredCarver | ConfiguredWorldCarver<WC>;
    class GenericEvent <T> extends net.minecraftforge.eventbus.api.Event implements Internal.IGenericEvent<T> {
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setResult(arg0: Internal.Event$Result_): void;
        hasResult(): boolean;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getGenericType(): Internal.Type;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get genericType(): Internal.Type
    }
    type GenericEvent_<T> = GenericEvent<T>;
    class GuiParent extends Internal.GuiControl implements Internal.Iterable<Internal.GuiChildControl>, Internal.IGuiParent {
        constructor()
        constructor(arg0: string, arg1: Internal.GuiFlow_)
        constructor(arg0: Internal.GuiFlow_)
        constructor(arg0: string, arg1: Internal.GuiFlow_, arg2: Internal.VAlign_)
        constructor(arg0: string, arg1: Internal.GuiFlow_, arg2: team.creative.creativecore.common.gui.Align_, arg3: Internal.VAlign_)
        constructor(arg0: string, arg1: Internal.GuiFlow_, arg2: team.creative.creativecore.common.gui.Align_)
        constructor(arg0: string)
        charTyped(arg0: string, arg1: number): boolean;
        insertControlBefore(arg0: Internal.GuiControl_, arg1: Internal.GuiControl_): Internal.GuiChildControl;
        static "playSound(net.minecraft.core.Holder$Reference,float,float)"(arg0: Internal.Holder$Reference_<Internal.SoundEvent>, arg1: number, arg2: number): void;
        add(...arg0: Internal.GuiControl_[]): this;
        "remove(team.creative.creativecore.common.gui.GuiChildControl)"(arg0: Internal.GuiChildControl_): boolean;
        static playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        getContentOffset(): number;
        getLayer(): Internal.GuiLayer;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        setTooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>): Internal.GuiControl;
        setDim(arg0: number, arg1: number): Internal.GuiControl;
        provider(): Internal.HolderLookup$Provider;
        static "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        registerEventClick(arg0: Internal.Consumer_<Internal.GuiControlClickEvent>): void;
        find(arg0: Internal.GuiControl_): Internal.GuiChildControl;
        scaleFactor(): number;
        getOffsetX(): number;
        is(...arg0: string[]): boolean;
        static playSound(arg0: Internal.Holder$Reference_<Internal.SoundEvent>): void;
        setDim(arg0: Internal.GuiSizeRule_): Internal.GuiControl;
        setEnabled(arg0: boolean): Internal.GuiControl;
        abstract hasGui(): boolean;
        replace(arg0: Internal.GuiControl_, arg1: Internal.GuiControl_): Internal.GuiChildControl;
        setExpandable(): Internal.GuiControl;
        addHover(...arg0: Internal.GuiControl_[]): this;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getNestedName(): string;
        insertControlAfter(arg0: Internal.GuiControl_, arg1: Internal.GuiControl_): Internal.GuiChildControl;
        getTooltip(): Internal.List<net.minecraft.network.chat.Component>;
        closeTopLayer(): void;
        static translate(arg0: string): string;
        add(arg0: Internal.GuiControl_): this;
        getClass(): typeof any;
        setSpacing(arg0: number): this;
        get<T extends Internal.GuiControl>(arg0: string): T;
        setFixedX(): Internal.GuiControl;
        static translatable(arg0: string): Internal.MutableComponent;
        "add(team.creative.creativecore.common.gui.GuiControl)"(arg0: Internal.GuiControl_): this;
        scaleFactorInv(): number;
        mouseClicked(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number, arg3: number): boolean;
        looseFocus(): void;
        isContainer(): boolean;
        remove(arg0: Internal.GuiChildControl_): boolean;
        "addHover(team.creative.creativecore.common.gui.GuiControl)"(arg0: Internal.GuiControl_): this;
        iterator(): Internal.Iterator<Internal.GuiChildControl>;
        getControlFormatting(): Internal.ControlFormatting;
        addHoverControl(arg0: Internal.GuiControl_): Internal.GuiChildControl;
        "setTooltip(java.util.List)"(arg0: Internal.List_<net.minecraft.network.chat.Component>): Internal.GuiControl;
        abstract reflow(): void;
        getPreferredHeight(arg0: number, arg1: number): number;
        get<T extends Internal.GuiControl>(arg0: string, arg1: T): T;
        spliterator(): Internal.Spliterator<Internal.GuiChildControl>;
        is(arg0: string): boolean;
        static "playSound(net.minecraft.core.Holder$Reference)"(arg0: Internal.Holder$Reference_<Internal.SoundEvent>): void;
        getMaxHeight(arg0: number, arg1: number): number;
        closeLayer(arg0: Internal.GuiLayer_): void;
        setVAlign(arg0: Internal.VAlign_): this;
        addHover(arg0: Internal.GuiControl_): this;
        toString(): string;
        toScreenRect(arg0: Internal.GuiControl_, arg1: team.creative.creativecore.common.util.math.geo.Rect_): team.creative.creativecore.common.util.math.geo.Rect;
        notifyAll(): void;
        toLayerRect(arg0: team.creative.creativecore.common.util.math.geo.Rect_): team.creative.creativecore.common.util.math.geo.Rect;
        setScale(arg0: number): this;
        abstract getIntegratedParent(): Internal.IGuiIntegratedParent;
        "is(java.lang.String)"(arg0: string): boolean;
        size(): number;
        setTooltip(arg0: string): Internal.GuiControl;
        has(arg0: string): boolean;
        isExpandableX(): boolean;
        setVisible(arg0: boolean): Internal.GuiControl;
        static playSound(arg0: Internal.SoundEvent_): void;
        mouseDoubleClicked(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number, arg3: number): boolean;
        clear(): void;
        wait(arg0: number): void;
        raiseEvent(arg0: Internal.GuiEvent_): void;
        static "playSound(net.minecraft.client.resources.sounds.SoundInstance)"(arg0: Internal.SoundInstance_): void;
        static translateOrDefault(arg0: string, arg1: string): string;
        setFixedY(): Internal.GuiControl;
        add(arg0: boolean, arg1: Internal.Supplier_<Internal.GuiControl>): this;
        getMinWidth(arg0: number): number;
        "is(java.lang.String[])"(...arg0: string[]): boolean;
        "addHover(team.creative.creativecore.common.gui.GuiControl[])"(...arg0: Internal.GuiControl_[]): this;
        registerEvent<T extends Internal.GuiEvent>(arg0: T, arg1: Internal.Consumer_<T>): void;
        setFlow(arg0: Internal.GuiFlow_): this;
        flowY(arg0: number, arg1: number, arg2: number): void;
        isExpandableY(): boolean;
        notify(): void;
        getBorder(arg0: Internal.GuiStyle_, arg1: Internal.StyleDisplay_): Internal.StyleDisplay;
        "add(team.creative.creativecore.common.gui.GuiControl[])"(...arg0: Internal.GuiControl_[]): this;
        getMaxWidth(arg0: number): number;
        setExpandableY(): Internal.GuiControl;
        remove(arg0: Internal.GuiControl_): Internal.GuiChildControl;
        getTooltipEvent(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number): Internal.GuiTooltipEvent;
        removeExclude(...arg0: string[]): void;
        "remove(java.lang.String[])"(...arg0: string[]): void;
        getPreferredWidth(arg0: number): number;
        isClient(): boolean;
        hasLayer(): boolean;
        render(arg0: Internal.GuiGraphics_, arg1: Internal.GuiChildControl_, arg2: team.creative.creativecore.common.util.math.geo.Rect_, arg3: team.creative.creativecore.common.util.math.geo.Rect_, arg4: number, arg5: number, arg6: number): void;
        static "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        setUnexpandableX(): Internal.GuiControl;
        "setTooltip(java.lang.String)"(arg0: string): Internal.GuiControl;
        tick(): void;
        closeThisLayer(): void;
        static playSound(arg0: Internal.SoundInstance_): void;
        isInteractable(): boolean;
        mouseDragged(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        wait(): void;
        testForDoubleClick(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number, arg3: number): boolean;
        clearEvents(): void;
        abstract isParent(arg0: Internal.IGuiParent_): boolean;
        addControl(arg0: Internal.GuiControl_): Internal.GuiChildControl;
        setAlign(arg0: team.creative.creativecore.common.gui.Align_): this;
        registerEventChanged(arg0: Internal.Consumer_<Internal.GuiControlChangedEvent<any>>): void;
        closed(): void;
        static translatable(arg0: string, ...arg1: any[]): Internal.MutableComponent;
        isEmpty(): boolean;
        wait(arg0: number, arg1: number): void;
        getBackground(arg0: Internal.GuiStyle_, arg1: Internal.StyleDisplay_): Internal.StyleDisplay;
        setFixed(): Internal.GuiControl;
        setExpandableX(): Internal.GuiControl;
        setParent(arg0: Internal.IGuiParent_): void;
        getOffsetY(): number;
        abstract getPlayer(): Internal.Player;
        static translate(arg0: string, ...arg1: any[]): string;
        setUnexpandable(): Internal.GuiControl;
        mouseReleased(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number, arg3: number): void;
        createChildRect(arg0: Internal.GuiChildControl_, arg1: team.creative.creativecore.common.util.math.geo.Rect_, arg2: number, arg3: number, arg4: number): team.creative.creativecore.common.util.math.geo.Rect;
        init(): void;
        addHover(arg0: boolean, arg1: Internal.Supplier_<Internal.GuiControl>): this;
        setUnexpandableY(): Internal.GuiControl;
        static playSound(arg0: Internal.Holder$Reference_<Internal.SoundEvent>, arg1: number, arg2: number): void;
        getParent(): Internal.IGuiParent;
        isMouseOverHovered(arg0: number, arg1: number): boolean;
        "remove(team.creative.creativecore.common.gui.GuiControl)"(arg0: Internal.GuiControl_): Internal.GuiChildControl;
        getMinHeight(arg0: number, arg1: number): number;
        toLayerRect(arg0: Internal.GuiControl_, arg1: team.creative.creativecore.common.util.math.geo.Rect_): team.creative.creativecore.common.util.math.geo.Rect;
        getStyle(): Internal.GuiStyle;
        hashCode(): number;
        mouseScrolled(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number, arg3: number): boolean;
        mouseMoved(arg0: team.creative.creativecore.common.util.math.geo.Rect_, arg1: number, arg2: number): void;
        remove(...arg0: string[]): void;
        flowX(arg0: number, arg1: number): void;
        forEach(arg0: Internal.Consumer_<Internal.GuiChildControl>): void;
        equals(arg0: any): boolean;
        toScreenRect(arg0: team.creative.creativecore.common.util.math.geo.Rect_): team.creative.creativecore.common.util.math.geo.Rect;
        get contentOffset(): number
        get layer(): Internal.GuiLayer
        set tooltip(arg0: Internal.List_<net.minecraft.network.chat.Component>)
        get offsetX(): number
        set dim(arg0: Internal.GuiSizeRule_)
        set enabled(arg0: boolean)
        get nestedName(): string
        get tooltip(): Internal.List<net.minecraft.network.chat.Component>
        get class(): typeof any
        set spacing(arg0: number)
        get container(): boolean
        get controlFormatting(): Internal.ControlFormatting
        set "tooltip(java.util.List)"(arg0: Internal.List_<net.minecraft.network.chat.Component>)
        set VAlign(arg0: Internal.VAlign_)
        set scale(arg0: number)
        get integratedParent(): Internal.IGuiIntegratedParent
        set tooltip(arg0: string)
        get expandableX(): boolean
        set visible(arg0: boolean)
        set flow(arg0: Internal.GuiFlow_)
        get expandableY(): boolean
        get client(): boolean
        set "tooltip(java.lang.String)"(arg0: string)
        get interactable(): boolean
        set align(arg0: team.creative.creativecore.common.gui.Align_)
        get empty(): boolean
        set parent(arg0: Internal.IGuiParent_)
        get offsetY(): number
        get player(): Internal.Player
        get parent(): Internal.IGuiParent
        get style(): Internal.GuiStyle
        spacing: number;
        align: team.creative.creativecore.common.gui.Align;
        valign: Internal.VAlign;
        flow: Internal.GuiFlow;
    }
    type GuiParent_ = GuiParent;
    class Either$Right <L, R> extends Internal.Either<L, R> {
        constructor(arg0: R)
        getClass(): typeof any;
        right(): Internal.Optional<R>;
        toString(): string;
        ifRight(arg0: Internal.Consumer_<R>): Internal.Either<L, R>;
        mapBoth<C, D>(arg0: Internal.Function_<L, C>, arg1: Internal.Function_<R, D>): Internal.Either<C, D>;
        flatMap<L2>(arg0: Internal.Function_<L, Internal.Either<L2, R>>): Internal.Either<L2, R>;
        notifyAll(): void;
        swap(): Internal.Either<R, L>;
        notify(): void;
        ifLeft(arg0: Internal.Consumer_<L>): Internal.Either<L, R>;
        wait(arg0: number, arg1: number): void;
        map<T>(arg0: Internal.Function_<L, T>, arg1: Internal.Function_<R, T>): T;
        mapRight<T>(arg0: Internal.Function_<R, T>): Internal.Either<L, T>;
        hashCode(): number;
        static right<L, R>(arg0: R): Internal.Either<L, R>;
        wait(): void;
        static unbox<L, R>(arg0: Internal.App_<Internal.Either$Mu<R>, L>): Internal.Either<L, R>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        mapLeft<T>(arg0: Internal.Function_<L, T>): Internal.Either<T, R>;
        orThrow(): L;
        left(): Internal.Optional<L>;
        static left<L, R>(arg0: L): Internal.Either<L, R>;
        get class(): typeof any
    }
    type Either$Right_<L, R> = Either$Right<L, R>;
    class DispenserBlockEntity extends Internal.RandomizableContainerBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Internal.Player_): void;
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        /**
         * @deprecated
        */
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        saveWithoutMetadata(): Internal.CompoundTag;
        abstract "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        setRemoved(): void;
        "isEmpty()"(): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getType(): Internal.BlockEntityType<any>;
        static "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,int)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getItem(arg0: number): Internal.ItemStack;
        getRandomSlot(arg0: Internal.RandomSource_): number;
        getCustomName(): net.minecraft.network.chat.Component;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        sdl$shouldUpdateDynamicLight(): boolean;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        countItem(arg0: Internal.Item_): number;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Player_): Internal.AbstractContainerMenu;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        clearRemoved(): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getHeight(): number;
        sdl$getDynamicLightX(): number;
        countNonEmpty(): number;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        unpackLootTable(arg0: Internal.Player_): void;
        clear(): void;
        wait(arg0: number): void;
        clearContent(): void;
        reviveCaps(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        getSlots(): number;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        addItem(arg0: Internal.ItemStack_): number;
        onLoad(): void;
        getContainerSize(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        sdl$getDynamicLightY(): number;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        getBlockState(): Internal.BlockState;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        static setLootTable(arg0: Internal.BlockGetter_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: ResourceLocation_): void;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        setLootTable(arg0: ResourceLocation_, arg1: number): void;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        saveWithId(): Internal.CompoundTag;
        isEmpty(): boolean;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        asContainer(): net.minecraft.world.Container;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Internal.Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        static canUnlock(arg0: Internal.Player_, arg1: Internal.LockCode_, arg2: net.minecraft.network.chat.Component_): boolean;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        static "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,double)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        canOpen(arg0: Internal.Player_): boolean;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set blockState(arg0: Internal.BlockState_)
        get width(): number
        get "empty()"(): boolean
        get type(): Internal.BlockEntityType<any>
        get customName(): net.minecraft.network.chat.Component
        get renderBoundingBox(): Internal.AABB
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        set customName(arg0: net.minecraft.network.chat.Component_)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get height(): number
        get persistentData(): Internal.CompoundTag
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get slots(): number
        get blockPos(): BlockPos
        get removed(): boolean
        get containerSize(): number
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get maxStackSize(): number
        get empty(): boolean
        get level(): Internal.Level
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        static readonly CONTAINER_SIZE: (9) & (number);
    }
    type DispenserBlockEntity_ = DispenserBlockEntity;
    abstract class PipeNet <NodeDataType> implements Internal.ITagSerializable<Internal.CompoundTag> {
        constructor(arg0: Internal.LevelPipeNet_<NodeDataType, Internal.PipeNet<NodeDataType>>)
        markNodeAsActive(arg0: BlockPos_, arg1: boolean): boolean;
        getClass(): typeof any;
        getWorldData(): Internal.LevelPipeNet<NodeDataType, Internal.PipeNet<NodeDataType>>;
        updateBlockedConnections(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): void;
        getLevel(): Internal.ServerLevel;
        containsNode(arg0: BlockPos_): boolean;
        updateNodeData(arg0: BlockPos_, arg1: NodeDataType): void;
        onNeighbourUpdate(arg0: BlockPos_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getContainedChunks(): Internal.Set<Internal.ChunkPos>;
        notify(): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        getLastUpdate(): number;
        isValid(): boolean;
        updateMark(arg0: BlockPos_, arg1: number): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        notifyAll(): void;
        serializeNBT(): Internal.CompoundTag;
        onPipeConnectionsUpdate(): void;
        removeNode(arg0: BlockPos_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getNodeAt(arg0: BlockPos_): com.gregtechceu.gtceu.api.pipenet.Node<NodeDataType>;
        wait(): void;
        wait(arg0: number): void;
        getAllNodes(): Internal.Map<BlockPos, com.gregtechceu.gtceu.api.pipenet.Node<NodeDataType>>;
        isNodeConnectedTo(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get worldData(): Internal.LevelPipeNet<NodeDataType, Internal.PipeNet<NodeDataType>>
        get level(): Internal.ServerLevel
        get containedChunks(): Internal.Set<Internal.ChunkPos>
        get lastUpdate(): number
        get valid(): boolean
        get allNodes(): Internal.Map<BlockPos, com.gregtechceu.gtceu.api.pipenet.Node<NodeDataType>>
    }
    type PipeNet_<NodeDataType> = PipeNet<NodeDataType>;
    interface Stroke {
        abstract createStrokedShape(arg0: Internal.Shape_): Internal.Shape;
        (arg0: Internal.Shape): Internal.Shape_;
    }
    type Stroke_ = Stroke | ((arg0: Internal.Shape)=> Internal.Shape_);
    class ContextMenu extends Internal.ModalPanel {
        constructor(panel: Internal.Panel_, i: Internal.List_<Internal.ContextMenuItem>)
        getScrollStep(): number;
        static getClipboardString(): string;
        mousePressed(button: Internal.MouseButton_): boolean;
        getY(): number;
        closeGui(openPrevScreen: boolean): void;
        scrollPanel(scroll: number): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        add(widget: Internal.Widget_): void;
        isDefaultScrollVertical(): boolean;
        setPos(x: number, y: number): void;
        keyPressed(key: dev.ftb.mods.ftblibrary.ui.input.Key_): boolean;
        isGhostIngredientTarget(ingredient: any): boolean;
        getPartialTicks(): number;
        setScrollX(scroll: number): void;
        setDrawVerticalSeparators(drawVerticalSeparators: boolean): void;
        getWidth(): number;
        getDrawLayer(): Internal.Widget$DrawLayer;
        isMouseOverAnyWidget(): boolean;
        keyReleased(key: dev.ftb.mods.ftblibrary.ui.input.Key_): void;
        getMouseX(): number;
        "compareTo(dev.ftb.mods.ftblibrary.ui.Widget)"(widget: Internal.Widget_): number;
        static isShiftKeyDown(): boolean;
        "compareTo(java.lang.Object)"(arg0: any): number;
        getExtraZlevel(): number;
        static setClipboardString(string: string): void;
        getClass(): typeof any;
        setScrollStep(s: number): void;
        handleClick(scheme: string, path: string): boolean;
        getX(): number;
        getParent(): Internal.Panel;
        run(): void;
        updateMouseOver(mouseX: number, mouseY: number): void;
        getPosY(): number;
        static isMouseButtonDown(button: Internal.MouseButton_): boolean;
        setOnlyRenderWidgetsInside(value: boolean): void;
        setScrollY(scroll: number): void;
        getWidget(index: number): Internal.Widget;
        setPosAndSize(x: number, y: number, w: number, h: number): Internal.Widget;
        setWidth(v: number): void;
        getHeight(): number;
        charTyped(c: string, modifiers: Internal.KeyModifiers_): boolean;
        getContentHeight(): number;
        setSize(w: number, h: number): void;
        toString(): string;
        getCursor(): Internal.CursorType;
        isOffset(): boolean;
        notifyAll(): void;
        mouseReleased(button: Internal.MouseButton_): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        openGuiLater(): void;
        getScrollX(): number;
        getOnlyInteractWithWidgetsInside(): boolean;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        getScreen(): com.mojang.blaze3d.platform.Window;
        drawWidget(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, widget: Internal.Widget_, x: number, y: number, w: number, h: number): void;
        handleClick(click: string): boolean;
        wait(arg0: number): void;
        setHeight(v: number): void;
        addMouseOverText(list: Internal.TooltipList_): void;
        shouldDraw(): boolean;
        compareTo(widget: Internal.Widget_): number;
        notify(): void;
        compareTo(arg0: any): number;
        getWidgets(): Internal.List<Internal.Widget>;
        getPosX(): number;
        closeGui(): void;
        openGui(): void;
        getWidgetType(): Internal.WidgetType;
        alignWidgets(): void;
        setX(v: number): void;
        clearWidgets(): void;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getScrollY(): number;
        getGui(): Internal.BaseScreen;
        tick(): void;
        wait(): void;
        refreshWidgets(): void;
        getTitle(): net.minecraft.network.chat.Component;
        openAfter(runnable: Internal.Runnable_): Internal.Runnable;
        draw(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getContentWidth(): number;
        drawBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        closeContextMenu(): void;
        mouseScrolled(scroll: number): boolean;
        getIngredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>;
        shouldAddMouseOverText(): boolean;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        setOffset(flag: boolean): void;
        movePanelScroll(dx: number, dy: number): boolean;
        setExtraZlevel(extraZlevel: number): void;
        setY(v: number): void;
        static isKeyDown(key: number): boolean;
        static isCtrlKeyDown(): boolean;
        addWidgets(): void;
        isMouseOver(): boolean;
        playClickSound(): void;
        mouseDoubleClicked(button: Internal.MouseButton_): boolean;
        onClosed(): void;
        acceptGhostIngredient(ingredient: any): void;
        drawOffsetBackground(graphics: Internal.GuiGraphics_, theme: Internal.Theme_, x: number, y: number, w: number, h: number): void;
        getMouseY(): number;
        setMaxRows(maxRows: number): void;
        hashCode(): number;
        getOnlyRenderWidgetsInside(): boolean;
        setDrawLayer(drawLayer: Internal.Widget$DrawLayer_): void;
        addAll(list: Internal.Iterable_<Internal.Widget>): void;
        align(layout: Internal.WidgetLayout_): number;
        equals(arg0: any): boolean;
        get scrollStep(): number
        get clipboardString(): string
        get y(): number
        get defaultScrollVertical(): boolean
        get partialTicks(): number
        set scrollX(scroll: number)
        set drawVerticalSeparators(drawVerticalSeparators: boolean)
        get width(): number
        get drawLayer(): Internal.Widget$DrawLayer
        get mouseOverAnyWidget(): boolean
        get mouseX(): number
        get shiftKeyDown(): boolean
        get extraZlevel(): number
        set clipboardString(string: string)
        get class(): typeof any
        set scrollStep(s: number)
        get x(): number
        get parent(): Internal.Panel
        get posY(): number
        set onlyRenderWidgetsInside(value: boolean)
        set scrollY(scroll: number)
        set width(v: number)
        get height(): number
        get contentHeight(): number
        get cursor(): Internal.CursorType
        get offset(): boolean
        get scrollX(): number
        get onlyInteractWithWidgetsInside(): boolean
        get screen(): com.mojang.blaze3d.platform.Window
        set height(v: number)
        get widgets(): Internal.List<Internal.Widget>
        get posX(): number
        get widgetType(): Internal.WidgetType
        set x(v: number)
        set onlyInteractWithWidgetsInside(value: boolean)
        get scrollY(): number
        get gui(): Internal.BaseScreen
        get title(): net.minecraft.network.chat.Component
        get contentWidth(): number
        get ingredientUnderMouse(): Internal.Optional<Internal.PositionedIngredient>
        get enabled(): boolean
        set offset(flag: boolean)
        set extraZlevel(extraZlevel: number)
        set y(v: number)
        get ctrlKeyDown(): boolean
        get mouseOver(): boolean
        get mouseY(): number
        set maxRows(maxRows: number)
        get onlyRenderWidgetsInside(): boolean
        set drawLayer(drawLayer: Internal.Widget$DrawLayer_)
    }
    type ContextMenu_ = ContextMenu;
    interface MessageFactory {
        abstract newMessage(message: any): org.apache.logging.log4j.message.Message;
        abstract newMessage(message: string): org.apache.logging.log4j.message.Message;
        abstract newMessage(message: string, ...params: any[]): org.apache.logging.log4j.message.Message;
        abstract "newMessage(java.lang.Object)"(message: any): org.apache.logging.log4j.message.Message;
        abstract "newMessage(java.lang.String)"(message: string): org.apache.logging.log4j.message.Message;
    }
    type MessageFactory_ = MessageFactory;
    interface ScatteringByteChannel extends Internal.ReadableByteChannel {
        abstract read(arg0: Internal.ByteBuffer_[], arg1: number, arg2: number): number;
        abstract read(arg0: Internal.ByteBuffer_): number;
        abstract "read(java.nio.ByteBuffer[])"(arg0: Internal.ByteBuffer_[]): number;
        abstract "read(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): number;
        abstract isOpen(): boolean;
        abstract close(): void;
        abstract read(arg0: Internal.ByteBuffer_[]): number;
        get open(): boolean
    }
    type ScatteringByteChannel_ = ScatteringByteChannel;
    interface IRecipeManager {
        abstract createRecipeLayoutDrawable<T>(arg0: Internal.IRecipeCategory_<T>, arg1: T, arg2: Internal.IFocusGroup_): Internal.Optional<Internal.IRecipeLayoutDrawable<T>>;
        abstract unhideRecipeCategory(arg0: mezz.jei.api.recipe.RecipeType_<any>): void;
        abstract hideRecipeCategory(arg0: mezz.jei.api.recipe.RecipeType_<any>): void;
        abstract createRecipeLookup<R>(arg0: mezz.jei.api.recipe.RecipeType_<R>): Internal.IRecipeLookup<R>;
        abstract getRecipeCategory<T>(arg0: mezz.jei.api.recipe.RecipeType_<T>): Internal.IRecipeCategory<T>;
        abstract unhideRecipes<T>(arg0: mezz.jei.api.recipe.RecipeType_<T>, arg1: Internal.Collection_<T>): void;
        abstract createRecipeCatalystLookup(arg0: mezz.jei.api.recipe.RecipeType_<any>): Internal.IRecipeCatalystLookup;
        abstract createRecipeLayoutDrawable<T>(arg0: Internal.IRecipeCategory_<T>, arg1: T, arg2: Internal.IFocusGroup_, arg3: Internal.IScalableDrawable_, arg4: number): Internal.Optional<Internal.IRecipeLayoutDrawable<T>>;
        abstract hideRecipes<T>(arg0: mezz.jei.api.recipe.RecipeType_<T>, arg1: Internal.Collection_<T>): void;
        abstract createRecipeCategoryLookup(): Internal.IRecipeCategoriesLookup;
        abstract createRecipeSlotDrawable(arg0: Internal.RecipeIngredientRole_, arg1: Internal.List_<Internal.Optional<Internal.ITypedIngredient<any>>>, arg2: Internal.Set_<number>, arg3: number): Internal.IRecipeSlotDrawable;
        abstract getRecipeType(arg0: ResourceLocation_): Internal.Optional<mezz.jei.api.recipe.RecipeType<any>>;
        abstract getRecipeType<T>(arg0: ResourceLocation_, arg1: T): Internal.Optional<mezz.jei.api.recipe.RecipeType<T>>;
        abstract addRecipes<T>(arg0: mezz.jei.api.recipe.RecipeType_<T>, arg1: Internal.List_<T>): void;
        /**
         * @deprecated
        */
        createRecipeSlotDrawable(arg0: Internal.RecipeIngredientRole_, arg1: Internal.List_<Internal.Optional<Internal.ITypedIngredient<any>>>, arg2: Internal.Set_<number>, arg3: number, arg4: number, arg5: number): Internal.IRecipeSlotDrawable;
    }
    type IRecipeManager_ = IRecipeManager;
    interface WatchEvent <T> {
        abstract context(): T;
        abstract count(): number;
        abstract kind(): Internal.WatchEvent$Kind<T>;
    }
    type WatchEvent_<T> = WatchEvent<T>;
    interface LootItemCondition extends Internal.Predicate<Internal.LootContext>, Internal.LootContextUser {
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<Internal.LootContext>): Internal.Predicate<Internal.LootContext>;
        negate(): Internal.Predicate<Internal.LootContext>;
        and(arg0: Internal.Predicate_<Internal.LootContext>): Internal.Predicate<Internal.LootContext>;
        getReferencedContextParams(): Internal.Set<Internal.LootContextParam<any>>;
        abstract test(arg0: Internal.LootContext_): boolean;
        abstract getType(): Internal.LootItemConditionType;
        validate(arg0: Internal.ValidationContext_): void;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        get referencedContextParams(): Internal.Set<Internal.LootContextParam<any>>
        get type(): Internal.LootItemConditionType
    }
    type LootItemCondition_ = LootItemCondition;
    class ModelData {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        static builder(): Internal.ModelData$Builder;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        derive(): Internal.ModelData$Builder;
        has(arg0: Internal.ModelProperty_<any>): boolean;
        wait(): void;
        get<T>(arg0: Internal.ModelProperty_<T>): T;
        wait(arg0: number): void;
        getProperties(): Internal.Set<any>;
        equals(arg0: any): boolean;
        get class(): typeof any
        get properties(): Internal.Set<any>
        static readonly EMPTY: (Internal.ModelData) & (Internal.ModelData);
    }
    type ModelData_ = ModelData;
    class SculkVeinBlock extends Internal.MultifaceBlock implements Internal.SculkBehaviour, Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        getSculkSpreadDelay(): number;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        static unpack(arg0: number): Internal.Set<Internal.Direction>;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onDischarged(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        static getFaceProperty(arg0: Internal.Direction_): Internal.BooleanProperty;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        canChangeBlockStateOnSpread(): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        depositCharge(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        getSpreader(): Internal.MultifaceSpreader;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        attemptSpreadVein(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Collection_<Internal.Direction>, arg4: boolean): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        isValidStateForPlacement(arg0: Internal.BlockGetter_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canAttachTo(arg0: Internal.BlockGetter_, arg1: Internal.Direction_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        static pack(arg0: Internal.Collection_<Internal.Direction>): number;
        static availableFaces(arg0: Internal.BlockState_): Internal.Set<Internal.Direction>;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        getSameSpaceSpreader(): Internal.MultifaceSpreader;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        attemptUseCharge(arg0: Internal.SculkSpreader$ChargeCursor_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.RandomSource_, arg4: Internal.SculkSpreader_, arg5: boolean): number;
        getFriction(): number;
        getStateForPlacement(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): Internal.BlockState;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        static regrow(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Collection_<Internal.Direction>): boolean;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        static hasFace(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        static hasSubstrateAccess(arg0: Internal.LevelAccessor_, arg1: Internal.BlockState_, arg2: BlockPos_): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        updateDecayDelay(arg0: number): number;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get sculkSpreadDelay(): number
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        get spreader(): Internal.MultifaceSpreader
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get sameSpaceSpreader(): Internal.MultifaceSpreader
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type SculkVeinBlock_ = SculkVeinBlock;
    class NotPredicate implements net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate {
        constructor(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_)
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static "matchesBlocks(java.util.List)"(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        notify(): void;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        type(): Internal.BlockPredicateType<any>;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.world.level.block.Block[])"(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(): void;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        test(arg0: any, arg1: any): boolean;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        getClass(): typeof any;
        static "matchesFluids(net.minecraft.core.Vec3i,net.minecraft.world.level.material.Fluid[])"(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "anyOf(java.util.List)"(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number, arg1: number): void;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,net.minecraft.world.level.block.Block[])"(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "allOf(net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate[])"(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(net.minecraft.world.level.WorldGenLevel,net.minecraft.core.BlockPos)"(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        toString(): string;
        notifyAll(): void;
        static "matchesFluids(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static "matchesBlocks(net.minecraft.core.Vec3i,java.util.List)"(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        hashCode(): number;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        wait(arg0: number): void;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        "test(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        equals(arg0: any): boolean;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.NotPredicate>;
    }
    type NotPredicate_ = NotPredicate;
    class TickPriority extends Internal.Enum<Internal.TickPriority> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.TickPriority>>;
        static values(): Internal.TickPriority[];
        name(): string;
        static valueOf(arg0: string): Internal.TickPriority;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        "compareTo(net.minecraft.world.ticks.TickPriority)"(arg0: Internal.TickPriority_): number;
        getDeclaringClass(): typeof Internal.TickPriority;
        compareTo(arg0: Internal.TickPriority_): number;
        wait(arg0: number): void;
        getValue(): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        static byValue(arg0: number): Internal.TickPriority;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.TickPriority
        get value(): number
        static readonly NORMAL: (Internal.TickPriority) & (Internal.TickPriority);
        static readonly EXTREMELY_LOW: (Internal.TickPriority) & (Internal.TickPriority);
        static readonly VERY_HIGH: (Internal.TickPriority) & (Internal.TickPriority);
        static readonly LOW: (Internal.TickPriority) & (Internal.TickPriority);
        static readonly HIGH: (Internal.TickPriority) & (Internal.TickPriority);
        static readonly EXTREMELY_HIGH: (Internal.TickPriority) & (Internal.TickPriority);
        static readonly VERY_LOW: (Internal.TickPriority) & (Internal.TickPriority);
    }
    type TickPriority_ = "normal" | "high" | "extremely_high" | "very_high" | "low" | "very_low" | "extremely_low" | TickPriority;
    interface Reference2BooleanFunction <K> extends it.unimi.dsi.fastutil.Function<K, boolean>, Internal.Predicate<K> {
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2BooleanFunction<T>;
        test(arg0: K): boolean;
        and(arg0: Internal.Predicate_<K>): Internal.Predicate<K>;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        removeBoolean(arg0: any): boolean;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2BooleanFunction;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Reference2IntFunction<K>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2BooleanFunction;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2BooleanFunction;
        or(arg0: Internal.Predicate_<K>): Internal.Predicate<K>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        put(arg0: K, arg1: boolean): boolean;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2BooleanFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<K, T>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Boolean)"(arg0: K, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Reference2LongFunction<K>;
        identity<T>(): Internal.Function<T, T>;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        defaultReturnValue(arg0: boolean): void;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Reference2FloatFunction<K>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, boolean>;
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Reference2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2BooleanFunction<T>;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Reference2CharFunction<K>;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2BooleanFunction;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Reference2ShortFunction<K>;
        apply(arg0: K): boolean;
        defaultReturnValue(): boolean;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2BooleanFunction;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Boolean)"(arg0: any, arg1: boolean): boolean;
        getOrDefault(arg0: any, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: boolean): boolean;
        abstract getBoolean(arg0: any): boolean;
        "getOrDefault(java.lang.Object,boolean)"(arg0: any, arg1: boolean): boolean;
        size(): number;
        negate(): Internal.Predicate<K>;
        clear(): void;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2BooleanFunction;
        "put(java.lang.Object,boolean)"(arg0: K, arg1: boolean): boolean;
        (arg0: any): boolean;
    }
    type Reference2BooleanFunction_<K> = ((arg0: any)=> boolean) | Reference2BooleanFunction<K>;
    class PlayerContainerEvent$Close extends Internal.PlayerContainerEvent {
        constructor(arg0: Internal.Player_, arg1: Internal.AbstractContainerMenu_)
        constructor()
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        getContainer(): Internal.AbstractContainerMenu;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get container(): Internal.AbstractContainerMenu
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type PlayerContainerEvent$Close_ = PlayerContainerEvent$Close;
    class TaskType {
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        static createTask(id: number, quest: Internal.Quest_, typeId: string): Internal.Task;
        toString(): string;
        getTypeId(): ResourceLocation;
        notifyAll(): void;
        setDisplayName(name: net.minecraft.network.chat.Component_): this;
        setGuiProvider(p: Internal.TaskType$GuiProvider_): this;
        getTypeForNBT(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        createTask(id: number, quest: Internal.Quest_): Internal.Task;
        getIconSupplier(): Internal.Icon;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getGuiProvider(): Internal.TaskType$GuiProvider;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get typeId(): ResourceLocation
        set displayName(name: net.minecraft.network.chat.Component_)
        set guiProvider(p: Internal.TaskType$GuiProvider_)
        get typeForNBT(): string
        get iconSupplier(): Internal.Icon
        get guiProvider(): Internal.TaskType$GuiProvider
        internalId: number;
    }
    type TaskType_ = TaskType;
    abstract class Mob extends Internal.LivingEntity implements Internal.Targeting {
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        isSuppressingBounce(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        isOnFire(): boolean;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        breakItem(arg0: Internal.ItemStack_): void;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        dropLeash(arg0: boolean, arg1: boolean): void;
        clearRestriction(): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        "self()"(): Internal.LivingEntity;
        setXxa(arg0: number): void;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        setUUID(arg0: Internal.UUID_): void;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        checkBelowWorld(): void;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        getBlockY(): number;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isSpectator(): boolean;
        isInWaterOrBubble(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        removeFreeWill(): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        isSteppingCarefully(): boolean;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        setInvisible(arg0: boolean): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        setHealth(arg0: number): void;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getKillCredit(): Internal.LivingEntity;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        hasPermissions(arg0: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getRemainingFireTicks(): number;
        getScriptType(): Internal.ScriptType;
        onlyOpCanSetNbt(): boolean;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        getId(): number;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        canBeHitByProjectile(): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        getEyeY(): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        skipDropExperience(): void;
        setSleepingPos(arg0: BlockPos_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getMyRidingOffset(): number;
        canStartSwimming(): boolean;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        getX(): number;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        isVehicle(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getTeamId(): string;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getMaxHeadYRot(): number;
        getLeashHolder(): Internal.Entity;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        getX(arg0: number): number;
        shouldRiderSit(): boolean;
        getSensing(): Internal.Sensing;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getLootTableSeed(): number;
        getDeltaMovement(): Vec3d;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        handleInsidePortal(arg0: BlockPos_): void;
        getArrowCount(): number;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setYaw(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getPickRadius(): number;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        isRemoved(): boolean;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getRotationVector(): Internal.Vec2;
        self(): Internal.Entity;
        refreshDimensions(): void;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        getFirstPassenger(): Internal.Entity;
        isAddedToWorld(): boolean;
        heal(arg0: number): void;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        gtceu$setFireImmune(arg0: boolean): void;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        getLastDamageSource(): DamageSource;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        getSoundSource(): Internal.SoundSource;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getAmbientSoundInterval(): number;
        getRestrictCenter(): BlockPos;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        is(arg0: Internal.Entity_): boolean;
        setZ(z: number): void;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        getY(): number;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        getLookControl(): Internal.LookControl;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        /**
         * @deprecated
        */
        isPushedByFluid(): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getArmorCoverPercentage(): number;
        displayFireAnimation(): boolean;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        onLeaveCombat(): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        sdl$isDynamicLightEnabled(): boolean;
        getFeetBlockState(): Internal.BlockState;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        isWithinRestriction(): boolean;
        canChangeDimensions(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        getTotalMovementSpeed(): number;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        getAttributes(): Internal.AttributeMap;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        isSwimming(): boolean;
        getTarget(): Internal.LivingEntity;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        getBlockStateOn(): Internal.BlockState;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        getPortalWaitTime(): number;
        /**
         * @deprecated
        */
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        stopSleeping(): void;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        setAirSupply(arg0: number): void;
        getRootVehicle(): Internal.Entity;
        getOnPos(): BlockPos;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        getStepHeight(): number;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        stopUsingItem(): void;
        isSleeping(): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        updateSwimming(): void;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        getSpeed(): number;
        setRemainingFireTicks(arg0: number): void;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        wait(): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getUuid(): Internal.UUID;
        setCanPickUpLoot(arg0: boolean): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        setSilent(arg0: boolean): void;
        canPickUpLoot(): boolean;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        kill(): void;
        canBeSeenAsEnemy(): boolean;
        onEnterCombat(): void;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        animateHurt(arg0: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        hasRestriction(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        getHeadArmorItem(): Internal.ItemStack;
        handleEntityEvent(arg0: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        deserializeNBT(arg0: Internal.Tag_): void;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        revive(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getForgePersistentData(): Internal.CompoundTag;
        addDeltaMovement(arg0: Vec3d_): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        maxUpStep(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        setGlowing(arg0: boolean): void;
        getMaxSpawnClusterSize(): number;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        setPortalCooldown(arg0: number): void;
        getDisplayName(): net.minecraft.network.chat.Component;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getMobType(): Internal.MobType;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        setPose(arg0: Internal.Pose_): void;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        discard(): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        abstract sdl$resetDynamicLight(): void;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        calculateEntityAnimation(arg0: boolean): void;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onAboveBubbleCol(arg0: boolean): void;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        checkDespawn(): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        getJumpControl(): Internal.JumpControl;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        wait(arg0: number, arg1: number): void;
        isDiscrete(): boolean;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        isInvertedHealAndHarm(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        isFullyFrozen(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        set defaultMovementSpeedMultiplier(speed: number)
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get suppressingBounce(): boolean
        get blockZ(): number
        get silent(): boolean
        set target(arg0: Internal.LivingEntity_)
        get pitch(): number
        get random(): Internal.RandomSource
        get onFire(): boolean
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set motionZ(z: number)
        get blockY(): number
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get spectator(): boolean
        get inWaterOrBubble(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        get portalCooldown(): number
        get item(): Internal.ItemStack
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get ignoringBlockTriggers(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get name(): net.minecraft.network.chat.Component
        set totalMovementSpeedMultiplier(speed: number)
        get controlledVehicle(): Internal.Entity
        set health(arg0: number)
        get armorValue(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get killCredit(): Internal.LivingEntity
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get autoSpinAttack(): boolean
        get controllingPassenger(): Internal.LivingEntity
        get remainingFireTicks(): number
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        get maxFallDistance(): number
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get ticksFrozen(): number
        get eyeY(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        set absorptionAmount(arg0: number)
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get living(): boolean
        get glowing(): boolean
        get x(): number
        get vehicle(): boolean
        get attackable(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get underWater(): boolean
        get maxHeadYRot(): number
        get leashHolder(): Internal.Entity
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get lootTableSeed(): number
        get deltaMovement(): Vec3d
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get moveControl(): Internal.MoveControl
        get onRails(): boolean
        get stingerCount(): number
        get defaultMovementSpeed(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        set yaw(arg0: number)
        get pickRadius(): number
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        get removed(): boolean
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get jumpBoostPower(): number
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get lastHurtMob(): Internal.LivingEntity
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get firstPassenger(): Internal.Entity
        get addedToWorld(): boolean
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        get lastDamageSource(): DamageSource
        get soundSource(): Internal.SoundSource
        set fabricBalmData(arg0: Internal.CompoundTag_)
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        get restrictCenter(): BlockPos
        set arrowCount(arg0: number)
        get motionZ(): number
        get leftHanded(): boolean
        get persistenceRequired(): boolean
        get invisible(): boolean
        set z(z: number)
        get bedOrientation(): Internal.Direction
        get y(): number
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get blocking(): boolean
        get offHandItem(): Internal.ItemStack
        /**
         * @deprecated
        */
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get crouching(): boolean
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get fabricBalmData(): Internal.CompoundTag
        get withinRestriction(): boolean
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get boundingBoxForCulling(): Internal.AABB
        get swimming(): boolean
        get target(): Internal.LivingEntity
        set sprinting(arg0: boolean)
        set x(x: number)
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get blockStateOn(): Internal.BlockState
        get inWater(): boolean
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get rootVehicle(): Internal.Entity
        get onPos(): BlockPos
        get undead(): boolean
        get noGravity(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        get speed(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get uuid(): Internal.UUID
        set canPickUpLoot(arg0: boolean)
        set offHandItem(item: Internal.ItemStack_)
        get mainHandItem(): Internal.ItemStack
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get bbWidth(): number
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get "name()"(): net.minecraft.network.chat.Component
        get inFluidType(): boolean
        get ticksRequiredToFreeze(): number
        set glowing(arg0: boolean)
        get maxSpawnClusterSize(): number
        get alive(): boolean
        get bbHeight(): number
        get username(): string
        get tags(): Internal.Set<string>
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get lastAttacker(): Internal.LivingEntity
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get percentFrozen(): number
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        set portalCooldown(arg0: number)
        get displayName(): net.minecraft.network.chat.Component
        set position(block: Internal.BlockContainerJS_)
        get mobType(): Internal.MobType
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        get passengersRidingOffset(): number
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get restrictRadius(): number
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        get fullyFrozen(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly MAX_PICKUP_LOOT_CHANCE: (0.55) & (number);
        static readonly PRESERVE_ITEM_DROP_CHANCE: (2) & (number);
        static readonly LEASH_TAG: ("Leash") & (string);
        static readonly DEFAULT_EQUIPMENT_DROP_CHANCE: (0.085) & (number);
        readonly goalSelector: Internal.GoalSelector;
        static readonly MAX_ENCHANTED_WEAPON_CHANCE: (0.25) & (number);
        xpReward: number;
        static readonly MAX_ENCHANTED_ARMOR_CHANCE: (0.5) & (number);
        static readonly UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: (2) & (number);
        ambientSoundTime: number;
        static readonly MAX_WEARING_ARMOR_CHANCE: (0.15) & (number);
        readonly targetSelector: Internal.GoalSelector;
    }
    type Mob_ = Mob;
    class InventoryComponent <T extends Internal.IComponentHarness> extends Internal.ItemStackHandler implements Internal.IContainerAddonProvider, Internal.IScreenAddonProvider {
        constructor(arg0: string, arg1: number, arg2: number, arg3: number)
        isColorGuiEnabled(): boolean;
        setOutputFilter(arg0: Internal.BiPredicate_<Internal.ItemStack, number>): this;
        getColorForSlotRendering(arg0: number): Internal.Color;
        "setSlotToColorRender(int,java.awt.Color)"(arg0: number, arg1: Internal.Color_): this;
        setStackInSlot(arg0: number, arg1: Internal.ItemStack_): void;
        canInteract(): boolean;
        getInsertPredicate(): Internal.BiPredicate<Internal.ItemStack, number>;
        notify(): void;
        clear(ingredient: Internal.Ingredient_): void;
        "extractItem(int,int,boolean)"(i: number, i1: number, b: boolean): Internal.ItemStack;
        "setSlotToColorRender(int,net.minecraft.world.item.DyeColor)"(arg0: number, arg1: Internal.DyeColor_): this;
        find(): number;
        setXPos(arg0: number): void;
        getSlots(): number;
        setChanged(): void;
        "getSlots()"(): number;
        kjs$self(): Internal.IItemHandler;
        getContainerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>;
        "insertItem(int,net.minecraft.world.item.ItemStack,boolean)"(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "getStackInSlot(int)"(arg0: number): Internal.ItemStack;
        getOnSlotChanged(): Internal.BiConsumer<Internal.ItemStack, number>;
        "getSlotLimit(int)"(arg0: number): number;
        getWidth(): number;
        getSlotLimit(arg0: number): number;
        getSlotToColorRenderMap(): Internal.Map<number, Internal.Color>;
        setComponentHarness(arg0: T): this;
        "setStackInSlot(int,net.minecraft.world.item.ItemStack)"(arg0: number, arg1: Internal.ItemStack_): void;
        getYSize(): number;
        wait(): void;
        setSlotPosition(arg0: Internal.Function_<number, org.apache.commons.lang3.tuple.Pair<number, number>>): this;
        setInputFilter(arg0: Internal.BiPredicate_<Internal.ItemStack, number>): this;
        getScreenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>;
        isItemValid(arg0: number, arg1: Internal.ItemStack_): boolean;
        getClass(): typeof any;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        getSlotPosition(): Internal.Function<number, org.apache.commons.lang3.tuple.Pair<number, number>>;
        setSlotVisiblePredicate(arg0: Internal.Predicate_<number>): this;
        getXPos(): number;
        setSlotToItemStackRender(arg0: number, arg1: Internal.ItemStack_): this;
        isEmpty(): boolean;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        getSlotVisiblePredicate(): Internal.Predicate<number>;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        wait(arg0: number, arg1: number): void;
        setRange(arg0: number, arg1: number): this;
        extractItem(arg0: number, arg1: number, arg2: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setSlotToColorRender(arg0: number, arg1: Internal.Color_): this;
        getName(): string;
        setColorGuiEnabled(arg0: boolean): this;
        getStackInSlot(arg0: number): Internal.ItemStack;
        "setSlotToColorRender(int,int)"(arg0: number, arg1: number): this;
        setSlotToColorRender(arg0: number, arg1: Internal.DyeColor_): this;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        toString(): string;
        getExtractPredicate(): Internal.BiPredicate<Internal.ItemStack, number>;
        notifyAll(): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        setYPos(arg0: number): void;
        setOnSlotChanged(arg0: Internal.BiConsumer_<Internal.ItemStack, number>): this;
        getComponentHarness(): T;
        setSlotLimit(arg0: number, arg1: number): this;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        serializeNBT(): Internal.CompoundTag;
        insertItem(arg0: number, arg1: Internal.ItemStack_, arg2: boolean): Internal.ItemStack;
        "isItemValid(int,net.minecraft.world.item.ItemStack)"(i: number, itemStack: Internal.ItemStack_): boolean;
        getYPos(): number;
        getXSize(): number;
        setSlotToColorRender(arg0: number, arg1: number): this;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getItemStackForSlotRendering(arg0: number): Internal.ItemStack;
        setSlotLimit(arg0: number): this;
        isMutable(): boolean;
        clear(): void;
        wait(arg0: number): void;
        find(ingredient: Internal.Ingredient_): number;
        setSize(arg0: number): void;
        equals(arg0: any): boolean;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get colorGuiEnabled(): boolean
        set outputFilter(arg0: Internal.BiPredicate_<Internal.ItemStack, number>)
        get insertPredicate(): Internal.BiPredicate<Internal.ItemStack, number>
        set XPos(arg0: number)
        get slots(): number
        get "slots()"(): number
        get containerAddons(): Internal.List<Internal.IFactory<Internal.IContainerAddon>>
        get onSlotChanged(): Internal.BiConsumer<Internal.ItemStack, number>
        get width(): number
        get slotToColorRenderMap(): Internal.Map<number, Internal.Color>
        set componentHarness(arg0: T)
        get YSize(): number
        set slotPosition(arg0: Internal.Function_<number, org.apache.commons.lang3.tuple.Pair<number, number>>)
        set inputFilter(arg0: Internal.BiPredicate_<Internal.ItemStack, number>)
        get screenAddons(): Internal.List<Internal.IFactory<Internal.IScreenAddon>>
        get class(): typeof any
        get slotPosition(): Internal.Function<number, org.apache.commons.lang3.tuple.Pair<number, number>>
        set slotVisiblePredicate(arg0: Internal.Predicate_<number>)
        get XPos(): number
        get empty(): boolean
        get slotVisiblePredicate(): Internal.Predicate<number>
        get name(): string
        set colorGuiEnabled(arg0: boolean)
        get height(): number
        get extractPredicate(): Internal.BiPredicate<Internal.ItemStack, number>
        get allItems(): Internal.List<Internal.ItemStack>
        set YPos(arg0: number)
        set onSlotChanged(arg0: Internal.BiConsumer_<Internal.ItemStack, number>)
        get componentHarness(): T
        get YPos(): number
        get XSize(): number
        set slotLimit(arg0: number)
        get mutable(): boolean
        set size(arg0: number)
    }
    type InventoryComponent_<T extends Internal.IComponentHarness> = InventoryComponent<T>;
    interface IScrollBoxWidget extends Internal.IRecipeWidget, Internal.IJeiInputHandler {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        handleInput(arg0: number, arg1: number, arg2: Internal.IJeiUserInput_): boolean;
        abstract "setContents(java.util.List)"(arg0: Internal.List_<Internal.FormattedText>): this;
        abstract "setContents(mezz.jei.api.gui.drawable.IDrawable)"(arg0: Internal.IDrawable_): this;
        drawWidget(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        handleMouseDragged(arg0: number, arg1: number, arg2: Internal.InputConstants$Key_, arg3: number, arg4: number): boolean;
        abstract getContentAreaWidth(): number;
        tick(): void;
        getTooltip(arg0: Internal.ITooltipBuilder_, arg1: number, arg2: number): void;
        handleMouseMoved(arg0: number, arg1: number): void;
        abstract getContentAreaHeight(): number;
        handleMouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        abstract getArea(): Internal.ScreenRectangle;
        abstract setContents(arg0: Internal.IDrawable_): this;
        abstract setContents(arg0: Internal.List_<Internal.FormattedText>): this;
        abstract getPosition(): Internal.ScreenPosition;
        set "contents(java.util.List)"(arg0: Internal.List_<Internal.FormattedText>)
        set "contents(mezz.jei.api.gui.drawable.IDrawable)"(arg0: Internal.IDrawable_)
        get contentAreaWidth(): number
        get contentAreaHeight(): number
        get area(): Internal.ScreenRectangle
        set contents(arg0: Internal.IDrawable_)
        set contents(arg0: Internal.List_<Internal.FormattedText>)
        get position(): Internal.ScreenPosition
    }
    type IScrollBoxWidget_ = IScrollBoxWidget;
    class DoubleTag extends Internal.NumericTag {
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsFloat(): number;
        getAsLong(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        write(arg0: Internal.DataOutput_): void;
        getId(): number;
        static valueOf(arg0: number): Internal.DoubleTag;
        getType(): Internal.TagType<Internal.DoubleTag>;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        getAsDouble(): number;
        accept(arg0: Internal.TagVisitor_): void;
        getAsInt(): number;
        hashCode(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        copy(): Internal.Tag;
        wait(): void;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asFloat(): number
        get asLong(): number
        get id(): number
        get type(): Internal.TagType<Internal.DoubleTag>
        get asDouble(): number
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly ZERO: (Internal.DoubleTag) & (Internal.DoubleTag);
        static readonly TYPE: Internal.TagType<Internal.DoubleTag>;
    }
    type DoubleTag_ = DoubleTag;
    class ShieldItem extends Internal.Item implements Internal.Equipable {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getEquipmentSlot(): Internal.EquipmentSlot;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        static getColor(arg0: Internal.ItemStack_): Internal.DyeColor;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getEquipSound(): Internal.SoundEvent;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        get equipmentSlot(): Internal.EquipmentSlot
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly EFFECTIVE_BLOCK_DELAY: (5) & (number);
        static readonly TAG_BASE_COLOR: ("Base") & (string);
        static readonly MINIMUM_DURABILITY_DAMAGE: (3.0) & (number);
    }
    type ShieldItem_ = ShieldItem;
    interface BiFunction <T, U, R> {
        andThen<V>(arg0: Internal.Function_<R, V>): Internal.BiFunction<T, U, V>;
        abstract apply(arg0: T, arg1: U): R;
        (arg0: T, arg1: U): R;
    }
    type BiFunction_<T, U, R> = BiFunction<T, U, R> | ((arg0: T, arg1: U)=> R);
    class ExpPatternProviderBlockEntity extends Internal.PatternProviderBlockEntity {
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        disassembleWithWrench(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.BlockHitResult_, arg3: Internal.ItemStack_): Internal.InteractionResult;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        exportSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setName(arg0: string): void;
        getMainNode(): Internal.IManagedGridNode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getGridNode(arg0: Internal.Direction_): Internal.IGridNode;
        isClientSide(): boolean;
        setRemoved(): void;
        getTerminalIcon(): Internal.AEItemKey;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        getType(): Internal.BlockEntityType<any>;
        isVisibleInTerminal(): boolean;
        getActionableNode(): Internal.IGridNode;
        addAdditionalDrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.List_<Internal.ItemStack>): void;
        getUpgrades(): Internal.IUpgradeInventory;
        setOwner(arg0: Internal.Player_): void;
        getRenderBoundingBox(): Internal.AABB;
        getCustomName(): net.minecraft.network.chat.Component;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        ifGridPresent(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        getTerminalPatternInventory(): Internal.InternalInventory;
        getTop(): Internal.Direction;
        sdl$shouldUpdateDynamicLight(): boolean;
        loadTag(arg0: Internal.CompoundTag_): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        createLogic(): Internal.PatternProviderLogic;
        getLogic(): Internal.PatternProviderLogic;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getGlobalPos(): Internal.GlobalPos;
        clearRemoved(): void;
        importSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getReadyInvoked(): number;
        sdl$getDynamicLightX(): number;
        getCableConnectionType(arg0: Internal.Direction_): Internal.AECableType;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        getMainMenuIcon(): Internal.ItemStack;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        isUpgradedWith(arg0: Internal.ItemLike_): boolean;
        openMenu(arg0: Internal.Player_, arg1: Internal.MenuLocator_): void;
        getGridConnectableSides(arg0: Internal.BlockOrientation_): Internal.Set<Internal.Direction>;
        onReady(): void;
        wait(arg0: number): void;
        static registerBlockEntityItem(arg0: Internal.BlockEntityType_<any>, arg1: Internal.Item_): void;
        clearContent(): void;
        reviveCaps(): void;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        onMainNodeStateChanged(arg0: Internal.IGridNodeListener$State_): void;
        getBlockPos(): BlockPos;
        getGrid(): Internal.IGrid;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        getTerminalSortOrder(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        getGridNode(): Internal.IGridNode;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        notLoaded(): boolean;
        getBlockState(): Internal.BlockState;
        getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        abstract getBlockEntity(): Internal.BlockEntity;
        getPriority(): number;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract saveChanges(): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        getConfigManager(): Internal.IConfigManager;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        getTerminalGroup(): Internal.PatternContainerGroup;
        onlyOpCanSetNbt(): boolean;
        getOrientation(): Internal.BlockOrientation;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getTargets(): Internal.EnumSet<Internal.Direction>;
        getQueuedForReady(): number;
        returnToMainMenu(arg0: Internal.Player_, arg1: Internal.ISubMenu_): void;
        setPriority(arg0: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getFront(): Internal.Direction;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        set blockState(arg0: Internal.BlockState_)
        set name(arg0: string)
        get mainNode(): Internal.IManagedGridNode
        get clientSide(): boolean
        get terminalIcon(): Internal.AEItemKey
        get type(): Internal.BlockEntityType<any>
        get visibleInTerminal(): boolean
        get actionableNode(): Internal.IGridNode
        get upgrades(): Internal.IUpgradeInventory
        set owner(arg0: Internal.Player_)
        get renderBoundingBox(): Internal.AABB
        get customName(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get terminalPatternInventory(): Internal.InternalInventory
        get top(): Internal.Direction
        get logic(): Internal.PatternProviderLogic
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get globalPos(): Internal.GlobalPos
        get readyInvoked(): number
        get persistentData(): Internal.CompoundTag
        get mainMenuIcon(): Internal.ItemStack
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get grid(): Internal.IGrid
        get removed(): boolean
        get terminalSortOrder(): number
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get blockEntity(): Internal.BlockEntity
        get priority(): number
        get configManager(): Internal.IConfigManager
        get level(): Internal.Level
        get terminalGroup(): Internal.PatternContainerGroup
        get orientation(): Internal.BlockOrientation
        get targets(): Internal.EnumSet<Internal.Direction>
        get queuedForReady(): number
        set priority(arg0: number)
        get front(): Internal.Direction
        get modelData(): Internal.ModelData
    }
    type ExpPatternProviderBlockEntity_ = ExpPatternProviderBlockEntity;
    class SoulFireBlock extends Internal.BaseFireBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        static getState(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        static canBePlacedAt(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSurviveOnBlock(arg0: Internal.BlockState_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type SoulFireBlock_ = SoulFireBlock;
    interface Boolean2IntFunction extends it.unimi.dsi.fastutil.Function<boolean, number> {
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2IntFunction;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: number): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<boolean, T>;
        remove(arg0: boolean): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Boolean,java.lang.Integer)"(arg0: boolean, arg1: number): number;
        abstract get(arg0: boolean): number;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        put(arg0: boolean, arg1: number): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2IntFunction<T>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Boolean2ByteFunction;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2IntFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Boolean2LongFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Boolean2ReferenceFunction<T>;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Boolean2DoubleFunction;
        getOrDefault(arg0: boolean, arg1: number): number;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Boolean2ShortFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "put(boolean,int)"(arg0: boolean, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2IntFunction<T>;
        "containsKey(boolean)"(arg0: boolean): boolean;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Boolean2FloatFunction;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2IntFunction;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2IntFunction;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2IntFunction;
        "remove(boolean)"(arg0: boolean): number;
        containsKey(arg0: boolean): boolean;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Boolean2ObjectFunction<T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Boolean2CharFunction;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2IntFunction;
        clear(): void;
        abstract "get(boolean)"(arg0: boolean): number;
        "getOrDefault(boolean,int)"(arg0: boolean, arg1: number): number;
        apply(arg0: boolean): number;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): any;
    }
    type Boolean2IntFunction_ = Boolean2IntFunction;
    interface ItemPropertiesExtensionImpl {
        abstract arch$getTab(): Internal.CreativeModeTab;
        abstract arch$getTabSupplier(): Internal.DeferredSupplier<Internal.CreativeModeTab>;
    }
    type ItemPropertiesExtensionImpl_ = ItemPropertiesExtensionImpl;
    class ConsoleJS {
        constructor(m: Internal.ScriptType_, log: org.slf4j.Logger_)
        handleError(line: Internal.ConsoleLine_, error: Internal.Throwable_, exitPattern: Internal.Pattern_, print: boolean): void;
        resetFile(): void;
        log(...message: any[]): void;
        shouldPrintDebug(): boolean;
        notify(): void;
        warn(message: string, error: Internal.Throwable_): Internal.ConsoleLine;
        getDebugEnabled(): boolean;
        getWriteToFile(): boolean;
        setDebugEnabled(m: boolean): void;
        errorf(message: string, ...args: any[]): Internal.ConsoleLine;
        trace(): void;
        static "getCurrent(dev.latvian.mods.kubejs.util.ConsoleJS)"(def: Internal.ConsoleJS_): Internal.ConsoleJS;
        wait(): void;
        printClass(className: string, tree: boolean): void;
        warn(message: string, error: Internal.Throwable_, exitPattern: Internal.Pattern_): Internal.ConsoleLine;
        groupEnd(): void;
        getClass(): typeof any;
        static getCurrent(def: Internal.ConsoleJS_): Internal.ConsoleJS;
        setCapturingErrors(enabled: boolean): void;
        group(): void;
        infof(message: string, ...args: any[]): Internal.ConsoleLine;
        flush(sync: boolean): void;
        info(message: any): Internal.ConsoleLine;
        static getCurrent(cx: Internal.Context_): Internal.ConsoleJS;
        debugf(message: string, ...args: any[]): Internal.ConsoleLine;
        error(message: any): Internal.ConsoleLine;
        errorsComponent(command: string): net.minecraft.network.chat.Component;
        error(message: string, throwable: Internal.Throwable_): Internal.ConsoleLine;
        wait(arg0: number, arg1: number): void;
        writeToFile(type: Internal.LogType_, line: string): void;
        getMuted(): boolean;
        debug(message: any): Internal.ConsoleLine;
        getLogger(): org.slf4j.Logger;
        getScriptLine(): number;
        warnf(message: string, ...args: any[]): Internal.ConsoleLine;
        setMuted(m: boolean): void;
        printObject(o: any, tree: boolean): void;
        printClass(className: string): void;
        toString(): string;
        printObject(o: any): void;
        notifyAll(): void;
        static "getCurrent(dev.latvian.mods.rhino.Context)"(cx: Internal.Context_): Internal.ConsoleJS;
        warn(message: any): Internal.ConsoleLine;
        hashCode(): number;
        error(message: string, error: Internal.Throwable_, exitPattern: Internal.Pattern_): Internal.ConsoleLine;
        writeToFile(type: Internal.LogType_, timestamp: number, line: string): void;
        wait(arg0: number): void;
        setWriteToFile(m: boolean): void;
        equals(arg0: any): boolean;
        get debugEnabled(): boolean
        get writeToFile(): boolean
        set debugEnabled(m: boolean)
        get class(): typeof any
        set capturingErrors(enabled: boolean)
        get muted(): boolean
        get logger(): org.slf4j.Logger
        get scriptLine(): number
        set muted(m: boolean)
        set writeToFile(m: boolean)
        static SERVER: (Internal.ConsoleJS) & (Internal.ConsoleJS);
        static CLIENT: (Internal.ConsoleJS) & (Internal.ConsoleJS);
        readonly scriptType: Internal.ScriptType;
        static STARTUP: (Internal.ConsoleJS) & (Internal.ConsoleJS);
    }
    type ConsoleJS_ = ConsoleJS;
    class Gson {
        constructor()
        "fromJson(com.google.gson.stream.JsonReader,java.lang.reflect.Type)"<T>(arg0: Internal.JsonReader_, arg1: Internal.Type_): T;
        newBuilder(): Internal.GsonBuilder;
        "getAdapter(com.google.gson.reflect.TypeToken)"<T>(arg0: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        fromJson<T>(arg0: Internal.JsonElement_, arg1: T): T;
        notify(): void;
        fieldNamingStrategy(): Internal.FieldNamingStrategy;
        "fromJson(com.google.gson.JsonElement,java.lang.reflect.Type)"<T>(arg0: Internal.JsonElement_, arg1: Internal.Type_): T;
        getDelegateAdapter<T>(arg0: Internal.TypeAdapterFactory_, arg1: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        "fromJson(com.google.gson.JsonElement,com.google.gson.reflect.TypeToken)"<T>(arg0: Internal.JsonElement_, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        toJson(arg0: any): string;
        "fromJson(java.io.Reader,java.lang.Class)"<T>(arg0: Internal.Reader_, arg1: T): T;
        "toJson(java.lang.Object)"(arg0: any): string;
        fromJson<T>(arg0: Internal.Reader_, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        toJson(arg0: any, arg1: Internal.Type_, arg2: Internal.JsonWriter_): void;
        toJson(arg0: any, arg1: Internal.Type_, arg2: Internal.Appendable_): void;
        toJsonTree(arg0: any): Internal.JsonElement;
        toJson(arg0: Internal.JsonElement_, arg1: Internal.Appendable_): void;
        getAdapter<T>(arg0: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        "toJson(java.lang.Object,java.lang.reflect.Type,com.google.gson.stream.JsonWriter)"(arg0: any, arg1: Internal.Type_, arg2: Internal.JsonWriter_): void;
        fromJson<T>(arg0: string, arg1: T): T;
        fromJson<T>(arg0: Internal.Reader_, arg1: T): T;
        toJsonTree(arg0: any, arg1: Internal.Type_): Internal.JsonElement;
        "fromJson(java.lang.String,java.lang.reflect.Type)"<T>(arg0: string, arg1: Internal.Type_): T;
        "fromJson(java.io.Reader,com.google.gson.reflect.TypeToken)"<T>(arg0: Internal.Reader_, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        toJson(arg0: Internal.JsonElement_): string;
        wait(): void;
        newJsonReader(arg0: Internal.Reader_): Internal.JsonReader;
        getAdapter<T>(arg0: T): Internal.TypeAdapter<T>;
        fromJson<T>(arg0: string, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        getClass(): typeof any;
        htmlSafe(): boolean;
        fromJson<T>(arg0: Internal.JsonReader_, arg1: Internal.Type_): T;
        newJsonWriter(arg0: Internal.Writer_): Internal.JsonWriter;
        "fromJson(java.io.Reader,java.lang.reflect.Type)"<T>(arg0: Internal.Reader_, arg1: Internal.Type_): T;
        fromJson<T>(arg0: Internal.JsonElement_, arg1: Internal.Type_): T;
        wait(arg0: number, arg1: number): void;
        /**
         * @deprecated
        */
        excluder(): Internal.Excluder;
        fromJson<T>(arg0: Internal.Reader_, arg1: Internal.Type_): T;
        serializeNulls(): boolean;
        toJson(arg0: any, arg1: Internal.Type_): string;
        "toJson(com.google.gson.JsonElement)"(arg0: Internal.JsonElement_): string;
        "fromJson(java.lang.String,com.google.gson.reflect.TypeToken)"<T>(arg0: string, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        "fromJson(java.lang.String,java.lang.Class)"<T>(arg0: string, arg1: T): T;
        "fromJson(com.google.gson.JsonElement,java.lang.Class)"<T>(arg0: Internal.JsonElement_, arg1: T): T;
        toJson(arg0: Internal.JsonElement_, arg1: Internal.JsonWriter_): void;
        toString(): string;
        "toJson(java.lang.Object,java.lang.reflect.Type,java.lang.Appendable)"(arg0: any, arg1: Internal.Type_, arg2: Internal.Appendable_): void;
        fromJson<T>(arg0: Internal.JsonReader_, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        notifyAll(): void;
        "fromJson(com.google.gson.stream.JsonReader,com.google.gson.reflect.TypeToken)"<T>(arg0: Internal.JsonReader_, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        fromJson<T>(arg0: string, arg1: Internal.Type_): T;
        "toJson(com.google.gson.JsonElement,com.google.gson.stream.JsonWriter)"(arg0: Internal.JsonElement_, arg1: Internal.JsonWriter_): void;
        hashCode(): number;
        "toJson(java.lang.Object,java.lang.Appendable)"(arg0: any, arg1: Internal.Appendable_): void;
        wait(arg0: number): void;
        "toJson(com.google.gson.JsonElement,java.lang.Appendable)"(arg0: Internal.JsonElement_, arg1: Internal.Appendable_): void;
        "getAdapter(java.lang.Class)"<T>(arg0: T): Internal.TypeAdapter<T>;
        fromJson<T>(arg0: Internal.JsonElement_, arg1: com.google.gson.reflect.TypeToken_<T>): T;
        equals(arg0: any): boolean;
        toJson(arg0: any, arg1: Internal.Appendable_): void;
        "toJson(java.lang.Object,java.lang.reflect.Type)"(arg0: any, arg1: Internal.Type_): string;
        get class(): typeof any
    }
    type Gson_ = Gson;
    interface OrderedEventExecutor extends Internal.EventExecutor {
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): Internal.List<Internal.Future<T>>;
        abstract submit<T>(arg0: Internal.Runnable_, arg1: T): io.netty.util.concurrent.Future<T>;
        abstract newProgressivePromise<V>(): Internal.ProgressivePromise<V>;
        abstract scheduleAtFixedRate(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        spliterator(): Internal.Spliterator<Internal.EventExecutor>;
        abstract schedule<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract parent(): Internal.EventExecutorGroup;
        abstract next(): Internal.EventExecutor;
        abstract newFailedFuture<V>(arg0: Internal.Throwable_): io.netty.util.concurrent.Future<V>;
        abstract "schedule(java.util.concurrent.Callable,long,java.util.concurrent.TimeUnit)"<V>(arg0: Internal.Callable_<V>, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<V>;
        abstract isTerminated(): boolean;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>, arg1: number, arg2: Internal.TimeUnit_): T;
        abstract scheduleWithFixedDelay(arg0: Internal.Runnable_, arg1: number, arg2: number, arg3: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract isShutdown(): boolean;
        abstract newPromise<V>(): Internal.Promise<V>;
        /**
         * @deprecated
        */
        abstract shutdownNow(): Internal.List<Internal.Runnable>;
        abstract invokeAll<T>(arg0: Internal.Collection_<Internal.Callable<T>>): Internal.List<Internal.Future<T>>;
        abstract shutdownGracefully(arg0: number, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.Future<any>;
        abstract shutdownGracefully(): io.netty.util.concurrent.Future<any>;
        abstract "submit(java.util.concurrent.Callable)"<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        abstract inEventLoop(arg0: Internal.Thread_): boolean;
        /**
         * @deprecated
        */
        abstract shutdown(): void;
        abstract terminationFuture(): io.netty.util.concurrent.Future<any>;
        abstract iterator(): Internal.Iterator<Internal.EventExecutor>;
        abstract awaitTermination(arg0: number, arg1: Internal.TimeUnit_): boolean;
        forEach(arg0: Internal.Consumer_<Internal.EventExecutor>): void;
        abstract "submit(java.lang.Runnable)"(arg0: Internal.Runnable_): io.netty.util.concurrent.Future<any>;
        abstract "schedule(java.lang.Runnable,long,java.util.concurrent.TimeUnit)"(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract schedule(arg0: Internal.Runnable_, arg1: number, arg2: Internal.TimeUnit_): io.netty.util.concurrent.ScheduledFuture<any>;
        abstract invokeAny<T>(arg0: Internal.Collection_<Internal.Callable<T>>): T;
        abstract execute(arg0: Internal.Runnable_): void;
        abstract newSucceededFuture<V>(arg0: V): io.netty.util.concurrent.Future<V>;
        abstract submit<T>(arg0: Internal.Callable_<T>): io.netty.util.concurrent.Future<T>;
        abstract submit(arg0: Internal.Runnable_): io.netty.util.concurrent.Future<any>;
        abstract isShuttingDown(): boolean;
        abstract inEventLoop(): boolean;
        get terminated(): boolean
        get shutdown(): boolean
        get shuttingDown(): boolean
    }
    type OrderedEventExecutor_ = OrderedEventExecutor;
    interface LongPredicate {
        negate(): this;
        or(arg0: Internal.LongPredicate_): this;
        abstract test(arg0: number): boolean;
        and(arg0: Internal.LongPredicate_): this;
        (arg0: number): boolean;
    }
    type LongPredicate_ = ((arg0: number)=> boolean) | LongPredicate;
    class StandingSignBlock extends Internal.SignBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.WoodType_)
        getSignHitboxCenterPosition(arg0: Internal.BlockState_): Vec3d;
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static getWoodType(arg0: Internal.Block_): Internal.WoodType;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        newBlockEntity(arg0: BlockPos_, arg1: Internal.BlockState_): Internal.BlockEntity;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        openTextEdit(arg0: Internal.Player_, arg1: Internal.SignBlockEntity_, arg2: boolean): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        getYRotationDegrees(arg0: Internal.BlockState_): number;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        type(): Internal.WoodType;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly ROTATION: (Internal.IntegerProperty) & (Internal.IntegerProperty);
    }
    type StandingSignBlock_ = StandingSignBlock;
    abstract class SingleQuadParticle extends Internal.Particle {
        getClass(): typeof any;
        getLifetime(): number;
        getQuadSize(arg0: number): number;
        setLifetime(arg0: number): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        notify(): void;
        scale(arg0: number): Internal.Particle;
        wait(arg0: number, arg1: number): void;
        abstract getRenderType(): Internal.ParticleRenderType;
        remove(): void;
        setColor(arg0: number, arg1: number, arg2: number): void;
        isAlive(): boolean;
        shouldCull(): boolean;
        toString(): string;
        getParticleGroup(): Internal.Optional<Internal.ParticleGroup>;
        notifyAll(): void;
        render(arg0: Internal.VertexConsumer_, arg1: Internal.Camera_, arg2: number): void;
        tick(): void;
        move(arg0: number, arg1: number, arg2: number): void;
        hashCode(): number;
        getBoundingBox(): Internal.AABB;
        wait(): void;
        wait(arg0: number): void;
        setParticleSpeed(arg0: number, arg1: number, arg2: number): void;
        getPos(): Vec3d;
        equals(arg0: any): boolean;
        setPower(arg0: number): Internal.Particle;
        get class(): typeof any
        get lifetime(): number
        set lifetime(arg0: number)
        set boundingBox(arg0: Internal.AABB_)
        get renderType(): Internal.ParticleRenderType
        get alive(): boolean
        get particleGroup(): Internal.Optional<Internal.ParticleGroup>
        get boundingBox(): Internal.AABB
        get pos(): Vec3d
        set power(arg0: number)
    }
    type SingleQuadParticle_ = SingleQuadParticle;
    interface Destroyable {
        destroy(): void;
        isDestroyed(): boolean;
        get destroyed(): boolean
    }
    type Destroyable_ = Destroyable;
    abstract class AbstractLong2ObjectSortedMap <V> extends Internal.AbstractLong2ObjectMap<V> implements Internal.Long2ObjectSortedMap<V> {
        "replace(java.lang.Long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        abstract subMap(arg0: number, arg1: number): Internal.Long2ObjectSortedMap<V>;
        abstract "subMap(long,long)"(arg0: number, arg1: number): Internal.Long2ObjectSortedMap<V>;
        "computeIfPresent(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "merge(long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        containsValue(arg0: any): boolean;
        remove(arg0: number): V;
        "apply(java.lang.Long)"(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        "subMap(java.lang.Long,java.lang.Long)"(arg0: number, arg1: number): Internal.Long2ObjectSortedMap<V>;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        "computeIfAbsent(long,it.unimi.dsi.fastutil.longs.Long2ObjectFunction)"(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
        "computeIfAbsent(java.lang.Long,java.util.function.Function)"(arg0: number, arg1: Internal.Function_<number, V>): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "computeIfPresent(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        values(): Internal.Collection<any>;
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        long2ObjectEntrySet(): Internal.ObjectSet<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract "get(long)"(arg0: number): V;
        "replace(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract defaultReturnValue(): V;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        abstract tailMap(arg0: number): Internal.Long2ObjectSortedMap<V>;
        getClass(): typeof any;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "getOrDefault(long,java.lang.Object)"(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        static of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "compute(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        abstract headMap(arg0: number): Internal.Long2ObjectSortedMap<V>;
        /**
         * @deprecated
        */
        firstKey(): any;
        /**
         * @deprecated
        */
        tailMap(arg0: number): Internal.Long2ObjectSortedMap<V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        abstract "tailMap(long)"(arg0: number): Internal.Long2ObjectSortedMap<V>;
        put(arg0: number, arg1: V): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        abstract "headMap(long)"(arg0: number): Internal.Long2ObjectSortedMap<V>;
        /**
         * @deprecated
        */
        "headMap(java.lang.Long)"(arg0: number): Internal.Long2ObjectSortedMap<V>;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "remove(long)"(arg0: number): V;
        toString(): string;
        abstract lastLongKey(): number;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        "merge(java.lang.Long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        "computeIfAbsent(long,java.util.function.LongFunction)"(arg0: number, arg1: Internal.LongFunction_<V>): V;
        abstract size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "remove(long,java.lang.Object)"(arg0: number, arg1: any): boolean;
        /**
         * @deprecated
        */
        "tailMap(java.lang.Object)"(arg0: any): Internal.SortedMap<any, any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSortedSet<Internal.Map$Entry<number, V>>;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        wait(arg0: number): void;
        replace(arg0: number, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        replace(arg0: number, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        "putIfAbsent(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        "replace(long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        /**
         * @deprecated
        */
        "headMap(java.lang.Object)"(arg0: any): Internal.SortedMap<any, any>;
        notify(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "apply(long)"(arg0: number): V;
        keySet(): Internal.Set<any>;
        /**
         * @deprecated
        */
        lastKey(): any;
        "putIfAbsent(long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        "compute(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.LongFunction_<V>): V;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        subMap(arg0: any, arg1: any): Internal.SortedMap<any, any>;
        comparator(): Internal.Comparator<any>;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        apply(arg0: number): V;
        putAll(arg0: Internal.Map_<number, V>): void;
        containsKey(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "replace(long,java.lang.Object)"(arg0: number, arg1: V): V;
        abstract firstLongKey(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        headMap(arg0: number): Internal.Long2ObjectSortedMap<V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        wait(): void;
        putIfAbsent(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        static identity<T>(): Internal.Function<T, T>;
        abstract defaultReturnValue(arg0: V): void;
        remove(arg0: number, arg1: any): boolean;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        "put(long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "tailMap(java.lang.Long)"(arg0: number): Internal.Long2ObjectSortedMap<V>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        "containsKey(long)"(arg0: number): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        apply(arg0: number): V;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        /**
         * @deprecated
        */
        "subMap(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): Internal.SortedMap<any, any>;
        /**
         * @deprecated
        */
        subMap(arg0: number, arg1: number): Internal.Long2ObjectSortedMap<V>;
        /**
         * @deprecated
        */
        tailMap(arg0: any): Internal.SortedMap<any, any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        headMap(arg0: any): Internal.SortedMap<any, any>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        abstract get(arg0: number): V;
        hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        putIfAbsent(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractLong2ObjectSortedMap_<V> = AbstractLong2ObjectSortedMap<V>;
    class TileOversizeInterface extends Internal.TileExInterface {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        disassembleWithWrench(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.BlockHitResult_, arg3: Internal.ItemStack_): Internal.InteractionResult;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        exportSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setName(arg0: string): void;
        getMainNode(): Internal.IManagedGridNode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getGridNode(arg0: Internal.Direction_): Internal.IGridNode;
        isClientSide(): boolean;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        getType(): Internal.BlockEntityType<any>;
        getActionableNode(): Internal.IGridNode;
        addAdditionalDrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.List_<Internal.ItemStack>): void;
        getUpgrades(): Internal.IUpgradeInventory;
        setOwner(arg0: Internal.Player_): void;
        getRenderBoundingBox(): Internal.AABB;
        getCustomName(): net.minecraft.network.chat.Component;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        ifGridPresent(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        getTop(): Internal.Direction;
        sdl$shouldUpdateDynamicLight(): boolean;
        loadTag(arg0: Internal.CompoundTag_): void;
        onChunkUnloaded(): void;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        setPage(arg0: number): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getGlobalPos(): Internal.GlobalPos;
        clearRemoved(): void;
        importSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        getReadyInvoked(): number;
        sdl$getDynamicLightX(): number;
        getCableConnectionType(arg0: Internal.Direction_): Internal.AECableType;
        getPersistentData(): Internal.CompoundTag;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        getMainMenuIcon(): Internal.ItemStack;
        hasLevel(): boolean;
        notifyAll(): void;
        getConfig(): Internal.GenericStackInv;
        sdl$dynamicLightTick(): void;
        isUpgradedWith(arg0: Internal.ItemLike_): boolean;
        openMenu(arg0: Internal.Player_, arg1: Internal.MenuLocator_): void;
        onReady(): void;
        getGridConnectableSides(arg0: Internal.BlockOrientation_): Internal.Set<Internal.Direction>;
        wait(arg0: number): void;
        static registerBlockEntityItem(arg0: Internal.BlockEntityType_<any>, arg1: Internal.Item_): void;
        clearContent(): void;
        reviveCaps(): void;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        onMainNodeStateChanged(arg0: Internal.IGridNodeListener$State_): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        getGridNode(): Internal.IGridNode;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        notLoaded(): boolean;
        getBlockState(): Internal.BlockState;
        getStorage(): Internal.GenericStackInv;
        getInstalledUpgrades(arg0: Internal.ItemLike_): number;
        abstract getBlockEntity(): Internal.BlockEntity;
        abstract getPriority(): number;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract saveChanges(): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        abstract getConfigManager(): Internal.IConfigManager;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        getOrientation(): Internal.BlockOrientation;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getInterfaceLogic(): Internal.InterfaceLogic;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getQueuedForReady(): number;
        returnToMainMenu(arg0: Internal.Player_, arg1: Internal.ISubMenu_): void;
        getPage(): number;
        abstract setPriority(arg0: number): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getFront(): Internal.Direction;
        getModelData(): Internal.ModelData;
        equals(arg0: any): boolean;
        set blockState(arg0: Internal.BlockState_)
        set name(arg0: string)
        get mainNode(): Internal.IManagedGridNode
        get clientSide(): boolean
        get type(): Internal.BlockEntityType<any>
        get actionableNode(): Internal.IGridNode
        get upgrades(): Internal.IUpgradeInventory
        set owner(arg0: Internal.Player_)
        get renderBoundingBox(): Internal.AABB
        get customName(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get top(): Internal.Direction
        set page(arg0: number)
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get globalPos(): Internal.GlobalPos
        get readyInvoked(): number
        get persistentData(): Internal.CompoundTag
        get mainMenuIcon(): Internal.ItemStack
        get config(): Internal.GenericStackInv
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get storage(): Internal.GenericStackInv
        get blockEntity(): Internal.BlockEntity
        get priority(): number
        get configManager(): Internal.IConfigManager
        get level(): Internal.Level
        get orientation(): Internal.BlockOrientation
        get interfaceLogic(): Internal.InterfaceLogic
        get queuedForReady(): number
        get page(): number
        set priority(arg0: number)
        get front(): Internal.Direction
        get modelData(): Internal.ModelData
    }
    type TileOversizeInterface_ = TileOversizeInterface;
    abstract class GTRegistry <K, V> implements Internal.Iterable<V> {
        constructor(arg0: ResourceLocation_)
        getClass(): typeof any;
        replace<T extends V>(arg0: K, arg1: T): T;
        iterator(): Internal.Iterator<V>;
        abstract loadFromNBT(arg0: Internal.Tag_): V;
        containValue(arg0: V): boolean;
        register<T extends V>(arg0: K, arg1: T): T;
        registerOrOverride<T extends V>(arg0: K, arg1: T): T;
        remove(arg0: K): boolean;
        spliterator(): Internal.Spliterator<V>;
        abstract readBuf(arg0: Internal.FriendlyByteBuf_): V;
        notify(): void;
        isFrozen(): boolean;
        wait(arg0: number, arg1: number): void;
        entries(): Internal.Set<Internal.Map$Entry<K, V>>;
        forEach(arg0: Internal.Consumer_<V>): void;
        get(arg0: K): V;
        remap(arg0: K, arg1: K): void;
        freeze(): void;
        keys(): Internal.Set<K>;
        toString(): string;
        abstract saveToNBT(arg0: V): Internal.Tag;
        containKey(arg0: K): boolean;
        notifyAll(): void;
        getOrDefaultKey(arg0: V, arg1: K): K;
        getKey(arg0: V): K;
        getOrDefault(arg0: K, arg1: V): V;
        unfreeze(): void;
        values(): Internal.Set<V>;
        hashCode(): number;
        registry(): Internal.Map<K, V>;
        abstract writeBuf(arg0: V, arg1: Internal.FriendlyByteBuf_): void;
        wait(): void;
        getRegistryName(): ResourceLocation;
        abstract codec(): Internal.Codec<V>;
        clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get frozen(): boolean
        get registryName(): ResourceLocation
        static readonly REGISTERED: ({[key: ResourceLocation]: Internal.GTRegistry$String<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$String<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: any, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$RL<any>, [key: ResourceLocation]: Internal.GTRegistry$String<any>, [key: ResourceLocation]: Internal.GTRegistry$String<any>, [key: ResourceLocation]: Internal.GTRegistry$String<any>}) & (Internal.Map<ResourceLocation, Internal.GTRegistry<any, any>>);
    }
    type GTRegistry_<K, V> = GTRegistry<K, V>;
    class VanillaBlockLoot extends Internal.BlockLootSubProvider {
        constructor()
        getClass(): typeof any;
        toString(): string;
        static createSilkTouchDispatchTable(arg0: Internal.Block_, arg1: Internal.LootPoolEntryContainer$Builder_<any>): Internal.LootTable$Builder;
        createSingleItemTable(arg0: Internal.ItemLike_, arg1: Internal.NumberProvider_): Internal.LootTable$Builder;
        applyExplosionDecay<T extends Internal.FunctionUserBuilder<T>>(arg0: Internal.ItemLike_, arg1: Internal.FunctionUserBuilder_<T>): T;
        generate(arg0: Internal.BiConsumer_<ResourceLocation, Internal.LootTable$Builder>): void;
        notifyAll(): void;
        static noDrop(): Internal.LootTable$Builder;
        createAttachedStemDrops(arg0: Internal.Block_, arg1: Internal.Item_): Internal.LootTable$Builder;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        createSingleItemTable(arg0: Internal.ItemLike_): Internal.LootTable$Builder;
        createStemDrops(arg0: Internal.Block_, arg1: Internal.Item_): Internal.LootTable$Builder;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type VanillaBlockLoot_ = VanillaBlockLoot;
    class ChatType extends Internal.Record {
        constructor(arg0: Internal.ChatTypeDecoration_, arg1: Internal.ChatTypeDecoration_)
        static bootstrap(arg0: Internal.BootstapContext_<Internal.ChatType>): void;
        getClass(): typeof any;
        static "bind(net.minecraft.resources.ResourceKey,net.minecraft.commands.CommandSourceStack)"(arg0: Internal.ResourceKey_<Internal.ChatType>, arg1: Internal.CommandSourceStack_): Internal.ChatType$Bound;
        toString(): string;
        notifyAll(): void;
        narration(): Internal.ChatTypeDecoration;
        static bind(arg0: Internal.ResourceKey_<Internal.ChatType>, arg1: Internal.CommandSourceStack_): Internal.ChatType$Bound;
        static bind(arg0: Internal.ResourceKey_<Internal.ChatType>, arg1: Internal.RegistryAccess_, arg2: net.minecraft.network.chat.Component_): Internal.ChatType$Bound;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static "bind(net.minecraft.resources.ResourceKey,net.minecraft.world.entity.Entity)"(arg0: Internal.ResourceKey_<Internal.ChatType>, arg1: Internal.Entity_): Internal.ChatType$Bound;
        static bind(arg0: Internal.ResourceKey_<Internal.ChatType>, arg1: Internal.Entity_): Internal.ChatType$Bound;
        bind(arg0: net.minecraft.network.chat.Component_): Internal.ChatType$Bound;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        chat(): Internal.ChatTypeDecoration;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly DEFAULT_CHAT_DECORATION: (Internal.ChatTypeDecoration) & (Internal.ChatTypeDecoration);
        static readonly MSG_COMMAND_OUTGOING: Internal.ResourceKey<Internal.ChatType>;
        static readonly EMOTE_COMMAND: Internal.ResourceKey<Internal.ChatType>;
        static readonly CHAT: Internal.ResourceKey<Internal.ChatType>;
        static readonly SAY_COMMAND: Internal.ResourceKey<Internal.ChatType>;
        static readonly MSG_COMMAND_INCOMING: Internal.ResourceKey<Internal.ChatType>;
        static readonly TEAM_MSG_COMMAND_OUTGOING: Internal.ResourceKey<Internal.ChatType>;
        static readonly CODEC: Internal.Codec<Internal.ChatType>;
        static readonly TEAM_MSG_COMMAND_INCOMING: Internal.ResourceKey<Internal.ChatType>;
    }
    type ChatType_ = ChatType | Special.ChatType;
    abstract class WorldSceneRenderer {
        constructor(world: Internal.Level_)
        deleteCacheBuffer(): this;
        getPositionedRect(x: number, y: number, width: number, height: number): Internal.PositionedRect;
        getPositionRectRevert(windowX: number, windowY: number, windowWidth: number, windowHeight: number): Internal.PositionedRect;
        setClearColor(clearColor: number): void;
        notify(): void;
        static renderBlocksForge(blockRenderDispatcher: Internal.BlockRenderDispatcher_, state: Internal.BlockState_, pos: BlockPos_, level: Internal.BlockAndTintGetter_, poseStack: Internal.PoseStack_, consumer: Internal.VertexConsumer_, random: Internal.RandomSource_, renderType: Internal.RenderType_): void;
        needCompileCache(): this;
        setCameraLookAt(lookAt: Vector3f_, radius: number, rotationPitch: number, rotationYaw: number): void;
        addRenderedBlocks(blocks: Internal.Collection_<BlockPos>, renderHook: Internal.ISceneBlockRenderHook_): this;
        useOrtho(ortho: boolean): this;
        setCameraOrtho(minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): void;
        isCompiling(): boolean;
        getParticleManager(): Internal.ParticleManager;
        getWorldUp(): Vector3f;
        setCameraLookAt(eyePos: Vector3f_, lookAt: Vector3f_, worldUp: Vector3f_): void;
        project(pos: Vector3f_): Vector3f;
        getLastHit(): Vector3f;
        rayTrace(hitPos: Vector3f_): Internal.BlockHitResult;
        setOnLookingAt(onLookingAt: Internal.Consumer_<Internal.BlockHitResult>): this;
        setFov(fov: number): void;
        setSceneEntityRenderHook(sceneEntityRenderHook: Internal.ISceneEntityRenderHook_): void;
        getLastTraceResult(): Internal.BlockHitResult;
        setBeforeBatchEnd(beforeBatchEnd: Internal.BiConsumer_<Internal.MultiBufferSource, number>): void;
        useCacheBuffer(useCache: boolean): this;
        getLookAt(): Vector3f;
        wait(): void;
        unProject(mouseX: number, mouseY: number): Vector3f;
        setCameraOrtho(x: number, y: number, z: number): void;
        getClass(): typeof any;
        getCompileProgress(): number;
        setAfterWorldRender(callback: Internal.Consumer_<Internal.WorldSceneRenderer>): this;
        getEyePos(): Vector3f;
        static canRenderInLayer(blockRenderDispatcher: Internal.BlockRenderDispatcher_, state: Internal.BlockState_, pos: BlockPos_, level: Internal.BlockAndTintGetter_, renderType: Internal.RenderType_, random: Internal.RandomSource_): boolean;
        wait(arg0: number, arg1: number): void;
        render(poseStack: Internal.PoseStack_, x: number, y: number, width: number, height: number, mouseX: number, mouseY: number): void;
        setBeforeWorldRender(callback: Internal.Consumer_<Internal.WorldSceneRenderer>): this;
        isUseCache(): boolean;
        static setDefaultRenderLayerState(layer: Internal.RenderType_): void;
        setParticleManager(particleManager: Internal.ParticleManager_): this;
        toString(): string;
        notifyAll(): void;
        unProject(mouseX: number, mouseY: number, checkDepth: boolean): Vector3f;
        setEndBatchLast(endBatchLast: boolean): void;
        getFov(): number;
        hashCode(): number;
        wait(arg0: number): void;
        setBlocked(blocked: Internal.Set_<BlockPos>): this;
        isEndBatchLast(): boolean;
        equals(arg0: any): boolean;
        set clearColor(clearColor: number)
        get compiling(): boolean
        get particleManager(): Internal.ParticleManager
        get worldUp(): Vector3f
        get lastHit(): Vector3f
        set onLookingAt(onLookingAt: Internal.Consumer_<Internal.BlockHitResult>)
        set fov(fov: number)
        set sceneEntityRenderHook(sceneEntityRenderHook: Internal.ISceneEntityRenderHook_)
        get lastTraceResult(): Internal.BlockHitResult
        set beforeBatchEnd(beforeBatchEnd: Internal.BiConsumer_<Internal.MultiBufferSource, number>)
        get lookAt(): Vector3f
        get class(): typeof any
        get compileProgress(): number
        set afterWorldRender(callback: Internal.Consumer_<Internal.WorldSceneRenderer>)
        get eyePos(): Vector3f
        set beforeWorldRender(callback: Internal.Consumer_<Internal.WorldSceneRenderer>)
        get useCache(): boolean
        set defaultRenderLayerState(layer: Internal.RenderType_)
        set particleManager(particleManager: Internal.ParticleManager_)
        set endBatchLast(endBatchLast: boolean)
        get fov(): number
        set blocked(blocked: Internal.Set_<BlockPos>)
        get endBatchLast(): boolean
        readonly renderedBlocksMap: Internal.Map<Internal.Collection<BlockPos>, Internal.ISceneBlockRenderHook>;
        readonly world: Internal.Level;
    }
    type WorldSceneRenderer_ = WorldSceneRenderer;
    class ForgeConfigSpec$ConfigValue <T> implements Internal.Supplier<T> {
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getPath(): Internal.List<string>;
        notify(): void;
        save(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        next(): Internal.ForgeConfigSpec$Builder;
        wait(arg0: number): void;
        clearCache(): void;
        getDefault(): T;
        get(): T;
        equals(arg0: any): boolean;
        set(arg0: T): void;
        get class(): typeof any
        get path(): Internal.List<string>
        get "default"(): T
    }
    type ForgeConfigSpec$ConfigValue_<T> = ForgeConfigSpec$ConfigValue<T>;
    interface IRecipeSlotDrawablesView {
        abstract getSlots(): Internal.List<Internal.IRecipeSlotDrawable>;
        getSlots(arg0: Internal.RecipeIngredientRole_): Internal.List<Internal.IRecipeSlotDrawable>;
        findSlotByName(arg0: string): Internal.Optional<Internal.IRecipeSlotDrawable>;
        get slots(): Internal.List<Internal.IRecipeSlotDrawable>
        (): Internal.List_<Internal.IRecipeSlotDrawable>;
    }
    type IRecipeSlotDrawablesView_ = IRecipeSlotDrawablesView | (()=> Internal.List_<Internal.IRecipeSlotDrawable>);
    class CustomStatBuilder extends Internal.BuilderBase<ResourceLocation> {
        constructor(i: ResourceLocation_)
        getClass(): typeof any;
        createAdditionalObjects(): void;
        createObject(): any;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<ResourceLocation>;
        getTranslationKeyGroup(): string;
        transformObject(obj: ResourceLocation_): ResourceLocation;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<ResourceLocation>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<ResourceLocation>;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        getRegistryType(): Internal.RegistryInfo<any>;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<ResourceLocation>;
        toString(): string;
        notifyAll(): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<ResourceLocation>;
        get(): ResourceLocation;
        getBuilderTranslationKey(): string;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        generateLang(lang: Internal.LangEventJS_): void;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        get class(): typeof any
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
    }
    type CustomStatBuilder_ = CustomStatBuilder;
    interface ConfiguredModelListAccessor {
        abstract gtceu$getModels(): Internal.List<Internal.ConfiguredModel>;
        (): Internal.List_<Internal.ConfiguredModel>;
    }
    type ConfiguredModelListAccessor_ = (()=> Internal.List_<Internal.ConfiguredModel>) | ConfiguredModelListAccessor;
    class BlockEntityType <T extends Internal.BlockEntity> implements Internal.DynamicLightHandlerHolder<any> {
        constructor(arg0: Internal.BlockEntityType$BlockEntitySupplier_<T>, arg1: Internal.Set_<Internal.Block>, arg2: com.mojang.datafixers.types.Type_<any>)
        getClass(): typeof any;
        static "cast(net.minecraft.world.level.block.entity.BlockEntityType)"<T extends Internal.BlockEntity>(entityType: Internal.BlockEntityType_<T>): Internal.DynamicLightHandlerHolder<T>;
        static "cast(net.minecraft.world.entity.EntityType)"<T extends Internal.Entity>(entityType: Internal.EntityType_<T>): Internal.DynamicLightHandlerHolder<T>;
        isValid(arg0: Internal.BlockState_): boolean;
        toString(): string;
        static getKey(arg0: Internal.BlockEntityType_<any>): ResourceLocation;
        static cast<T extends Internal.Entity>(entityType: Internal.EntityType_<T>): Internal.DynamicLightHandlerHolder<T>;
        notifyAll(): void;
        sodiumdynamiclights$getDynamicLightHandler(): Internal.DynamicLightHandler<any>;
        getBlockEntity(arg0: Internal.BlockGetter_, arg1: BlockPos_): T;
        create(arg0: BlockPos_, arg1: Internal.BlockState_): T;
        static cast<T extends Internal.BlockEntity>(entityType: Internal.BlockEntityType_<T>): Internal.DynamicLightHandlerHolder<T>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        sodiumdynamiclights$setDynamicLightHandler(handler: Internal.DynamicLightHandler_<any>): void;
        hashCode(): number;
        sodiumdynamiclights$getName(): net.minecraft.network.chat.Component;
        wait(): void;
        wait(arg0: number): void;
        sodiumdynamiclights$getSetting(): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly PISTON: Internal.BlockEntityType<Internal.PistonMovingBlockEntity>;
        static readonly HANGING_SIGN: Internal.BlockEntityType<Internal.HangingSignBlockEntity>;
        static readonly CONDUIT: Internal.BlockEntityType<Internal.ConduitBlockEntity>;
        static readonly BEACON: Internal.BlockEntityType<Internal.BeaconBlockEntity>;
        static readonly END_GATEWAY: Internal.BlockEntityType<Internal.TheEndGatewayBlockEntity>;
        static readonly SHULKER_BOX: Internal.BlockEntityType<Internal.ShulkerBoxBlockEntity>;
        static readonly LECTERN: Internal.BlockEntityType<Internal.LecternBlockEntity>;
        static readonly BREWING_STAND: Internal.BlockEntityType<Internal.BrewingStandBlockEntity>;
        static readonly BEEHIVE: Internal.BlockEntityType<Internal.BeehiveBlockEntity>;
        static readonly COMMAND_BLOCK: Internal.BlockEntityType<Internal.CommandBlockEntity>;
        static readonly DECORATED_POT: Internal.BlockEntityType<Internal.DecoratedPotBlockEntity>;
        static readonly TRAPPED_CHEST: Internal.BlockEntityType<Internal.TrappedChestBlockEntity>;
        static readonly BANNER: Internal.BlockEntityType<Internal.BannerBlockEntity>;
        static readonly CALIBRATED_SCULK_SENSOR: Internal.BlockEntityType<Internal.CalibratedSculkSensorBlockEntity>;
        static readonly HOPPER: Internal.BlockEntityType<Internal.HopperBlockEntity>;
        static readonly CHEST: Internal.BlockEntityType<Internal.ChestBlockEntity>;
        static readonly ENDER_CHEST: Internal.BlockEntityType<Internal.EnderChestBlockEntity>;
        static readonly END_PORTAL: Internal.BlockEntityType<Internal.TheEndPortalBlockEntity>;
        static readonly COMPARATOR: Internal.BlockEntityType<Internal.ComparatorBlockEntity>;
        static readonly FURNACE: Internal.BlockEntityType<Internal.FurnaceBlockEntity>;
        static readonly BED: Internal.BlockEntityType<Internal.BedBlockEntity>;
        static readonly SCULK_SHRIEKER: Internal.BlockEntityType<Internal.SculkShriekerBlockEntity>;
        static readonly JUKEBOX: Internal.BlockEntityType<Internal.JukeboxBlockEntity>;
        static readonly SCULK_SENSOR: Internal.BlockEntityType<Internal.SculkSensorBlockEntity>;
        static readonly BRUSHABLE_BLOCK: Internal.BlockEntityType<Internal.BrushableBlockEntity>;
        static readonly MOB_SPAWNER: Internal.BlockEntityType<Internal.SpawnerBlockEntity>;
        static readonly DAYLIGHT_DETECTOR: Internal.BlockEntityType<Internal.DaylightDetectorBlockEntity>;
        static readonly BLAST_FURNACE: Internal.BlockEntityType<Internal.BlastFurnaceBlockEntity>;
        static readonly CHISELED_BOOKSHELF: Internal.BlockEntityType<Internal.ChiseledBookShelfBlockEntity>;
        static readonly DISPENSER: Internal.BlockEntityType<Internal.DispenserBlockEntity>;
        static readonly SIGN: Internal.BlockEntityType<Internal.SignBlockEntity>;
        static readonly BELL: Internal.BlockEntityType<Internal.BellBlockEntity>;
        static readonly JIGSAW: Internal.BlockEntityType<Internal.JigsawBlockEntity>;
        static readonly BARREL: Internal.BlockEntityType<Internal.BarrelBlockEntity>;
        static readonly SMOKER: Internal.BlockEntityType<Internal.SmokerBlockEntity>;
        static readonly SKULL: Internal.BlockEntityType<Internal.SkullBlockEntity>;
        static readonly STRUCTURE_BLOCK: Internal.BlockEntityType<Internal.StructureBlockEntity>;
        static readonly SCULK_CATALYST: Internal.BlockEntityType<Internal.SculkCatalystBlockEntity>;
        static readonly DROPPER: Internal.BlockEntityType<Internal.DropperBlockEntity>;
        static readonly ENCHANTING_TABLE: Internal.BlockEntityType<Internal.EnchantmentTableBlockEntity>;
        static readonly CAMPFIRE: Internal.BlockEntityType<Internal.CampfireBlockEntity>;
    }
    type BlockEntityType_<T extends Internal.BlockEntity> = Special.BlockEntityType | BlockEntityType<T>;
    class ParticleGroup {
        constructor(arg0: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getLimit(): number;
        get class(): typeof any
        get limit(): number
        static readonly SPORE_BLOSSOM: (Internal.ParticleGroup) & (Internal.ParticleGroup);
    }
    type ParticleGroup_ = ParticleGroup;
    abstract class ItemBuilder extends Internal.BuilderBase<Internal.Item> {
        constructor(i: ResourceLocation_)
        static toToolTier(o: any): Internal.Tier;
        /**
         * Adds subtypes to the item. The function should return a collection of item stacks, each with a different subtype.
         * 
         * Each subtype will appear as a separate item in JEI and the creative inventory.
        */
        subtypes(fn: Internal.Function_<Internal.ItemStack, Internal.Collection<Internal.ItemStack>>): this;
        createAdditionalObjects(): void;
        /**
         * Gets called when the item is used to hurt an entity.
         * 
         * For example, when using a sword to hit a mob, this is called.
        */
        hurtEnemy(context: Internal.Predicate_<Internal.ItemBuilder$HurtEnemyContext>): this;
        getTranslationKeyGroup(): string;
        notify(): void;
        get(): Internal.Item;
        /**
         * Makes the item not stackable, equivalent to setting the item's max stack size to 1.
        */
        unstackable(): this;
        /**
         * When players finish using the item.
         * 
         * This is called only when `useDuration` ticks have passed.
         * 
         * For example, when eating food, this is called when the player has finished eating the food, so hunger is restored.
        */
        finishUsing(finishUsing: Internal.ItemBuilder$FinishUsingCallback_): this;
        /**
         * Colorizes item's texture of the given index. Index is used when you have multiple layers, e.g. a crushed ore (of rock + ore).
        */
        color(index: number, color: Internal.ItemTintFunction_): this;
        getRegistryType(): Internal.RegistryInfo<any>;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): this;
        /**
         * Sets the item's model (parent).
        */
        parentModel(m: string): this;
        /**
         * Sets the item's max stack size. Default is 64.
        */
        maxStackSize(v: number): this;
        /**
         * Colorizes item's texture of the given index. Useful for coloring items, like GT ores ore dusts.
        */
        color(callback: Internal.ItemTintFunction_): this;
        /**
         * Adds a tooltip to the item.
        */
        tooltip(text: net.minecraft.network.chat.Component_): this;
        "transformObject(net.minecraft.world.item.Item)"(obj: Internal.Item_): Internal.Item;
        /**
         * Determines the width of the item's durability bar. Defaulted to vanilla behavior.
         * 
         * The function should return a value between 0 and 13 (max width of the bar).
        */
        barWidth(barWidth: Internal.ToIntFunction_<Internal.ItemStack>): this;
        /**
         * Combined method of formattedDisplayName().displayName(name).
        */
        formattedDisplayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the item's rarity.
        */
        rarity(v: Internal.Rarity_): this;
        /**
         * Makes the item fire resistant like netherite tools.
        */
        fireResistant(): this;
        /**
         * Sets the display name for this object, e.g. `Stone`.
         * 
         * This will be overridden by a lang file if it exists.
        */
        displayName(name: net.minecraft.network.chat.Component_): Internal.BuilderBase<Internal.Item>;
        /**
         * Determines the animation of the item when used, e.g. eating food.
        */
        useAnimation(animation: Internal.UseAnim_): this;
        getBuilderTranslationKey(): string;
        /**
         * Determines if player will start using the item.
         * 
         * For example, when eating food, returning true will make the player start eating the food.
        */
        use(use: Internal.ItemBuilder$UseCallback_): this;
        /**
         * When players did not finish using the item but released the right mouse button halfway through.
         * 
         * An example is the bow, where the arrow is shot when the player releases the right mouse button.
         * 
         * To ensure the bow won't finish using, Minecraft sets the `useDuration` to a very high number (1h).
        */
        releaseUsing(releaseUsing: Internal.ItemBuilder$ReleaseUsingCallback_): this;
        /**
         * Sets the item's container item, e.g. a bucket for a milk bucket.
        */
        containerItem(id: ResourceLocation_): this;
        wait(): void;
        /**
         * Sets the item's burn time. Default is 0 (Not a fuel).
        */
        burnTime(v: number): this;
        /**
         * Directlys set the item's texture json.
        */
        textureJson(json: Internal.JsonObject_): this;
        static toArmorMaterial(o: any): Internal.ArmorMaterial;
        generateLang(lang: Internal.LangEventJS_): void;
        /**
         * The duration when the item is used.
         * 
         * For example, when eating food, this is the time it takes to eat the food.
         * This can change the eating speed, or be used for other things (like making a custom bow).
        */
        useDuration(useDuration: Internal.ToIntFunction_<Internal.ItemStack>): this;
        getClass(): typeof any;
        /**
         * Makes the item fire resistant like netherite tools (or not).
        */
        fireResistant(isFireResistant: boolean): this;
        texture(key: string, tex: Internal.Attribute_): this;
        /**
         * Sets the item's max damage. Default is 0 (No durability).
        */
        maxDamage(v: number): this;
        "transformObject(java.lang.Object)"(arg0: any): any;
        wait(arg0: number, arg1: number): void;
        createItemProperties(): Internal.Item$Properties;
        generateDataJsons(generator: Internal.DataJsonGenerator_): void;
        /**
         * Sets the item's name dynamically.
        */
        name(name: Internal.ItemBuilder$NameCallback_): this;
        abstract createObject(): Internal.Item;
        /**
         * Makes the item glow like enchanted, even if it's not enchanted.
        */
        glow(v: boolean): this;
        transformObject(arg0: any): any;
        /**
         * Directly set the item's model json.
        */
        modelJson(json: Internal.JsonObject_): this;
        toString(): string;
        /**
         * Set the food properties of the item.
        */
        food(b: Internal.Consumer_<Internal.FoodBuilder>): this;
        notifyAll(): void;
        /**
         * Makes displayName() override language files.
        */
        formattedDisplayName(): Internal.BuilderBase<Internal.Item>;
        hashCode(): number;
        texture(tex: Internal.Attribute_): this;
        transformObject(obj: Internal.Item_): Internal.Item;
        wait(arg0: number): void;
        /**
         * Determines the color of the item's durability bar. Defaulted to vanilla behavior.
        */
        barColor(barColor: Internal.Function_<Internal.ItemStack, dev.latvian.mods.rhino.mod.util.color.Color>): this;
        /**
         * Adds a tag to this object, e.g. `minecraft:stone`.
        */
        tag(tag: ResourceLocation_): Internal.BuilderBase<Internal.Item>;
        /**
         * Sets the translation key for this object, e.g. `block.minecraft.stone`.
        */
        translationKey(key: string): Internal.BuilderBase<Internal.Item>;
        equals(arg0: any): boolean;
        newID(pre: string, post: string): ResourceLocation;
        generateAssetJsons(generator: Internal.AssetJsonGenerator_): void;
        /**
         * @deprecated
        */
        group(g: string): this;
        get translationKeyGroup(): string
        get registryType(): Internal.RegistryInfo<any>
        get builderTranslationKey(): string
        get class(): typeof any
        parentModel: string;
        texture: string;
        textureJson: Internal.JsonObject;
        static readonly ARMOR_TIERS: ({"gold": Internal.ArmorMaterials, "chain": Internal.ArmorMaterials, "diamond": Internal.ArmorMaterials, "turtle": Internal.ArmorMaterials, "iron": Internal.ArmorMaterials, "leather": Internal.ArmorMaterials, "netherite": Internal.ArmorMaterials}) & (Internal.Map<string, Internal.ArmorMaterial>);
        modelJson: Internal.JsonObject;
        static readonly TOOL_TIERS: ({"gold": any, "diamond": any, "iron": any, "wood": any, "stone": any, "netherite": any}) & (Internal.Map<string, Internal.Tier>);
    }
    type ItemBuilder_ = ItemBuilder;
    class IpBanListEntry extends Internal.BanListEntry<string> {
        constructor(arg0: string, arg1: Internal.Date_, arg2: string, arg3: Internal.Date_, arg4: string)
        constructor(arg0: Internal.JsonObject_)
        constructor(arg0: string)
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getExpires(): Internal.Date;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getSource(): string;
        equals(arg0: any): boolean;
        getCreated(): Internal.Date;
        getReason(): string;
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get expires(): Internal.Date
        get source(): string
        get created(): Internal.Date
        get reason(): string
    }
    type IpBanListEntry_ = IpBanListEntry;
    class ServerboundSetJigsawBlockPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: BlockPos_, arg1: ResourceLocation_, arg2: ResourceLocation_, arg3: ResourceLocation_, arg4: string, arg5: Internal.JigsawBlockEntity$JointType_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getTarget(): ResourceLocation;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        toString(): string;
        getJoint(): Internal.JigsawBlockEntity$JointType;
        notifyAll(): void;
        getName(): ResourceLocation;
        getPool(): ResourceLocation;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        "handle(net.minecraft.network.protocol.game.ServerGamePacketListener)"(arg0: Internal.ServerGamePacketListener_): void;
        getPos(): BlockPos;
        hashCode(): number;
        getFinalState(): string;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get target(): ResourceLocation
        get joint(): Internal.JigsawBlockEntity$JointType
        get name(): ResourceLocation
        get pool(): ResourceLocation
        get skippable(): boolean
        get pos(): BlockPos
        get finalState(): string
    }
    type ServerboundSetJigsawBlockPacket_ = ServerboundSetJigsawBlockPacket;
    interface IForgeRegistry$ClearCallback <V> {
        abstract onClear(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager): void;
    }
    type IForgeRegistry$ClearCallback_<V> = IForgeRegistry$ClearCallback<V> | ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager)=> void);
    interface Double2BooleanFunction extends it.unimi.dsi.fastutil.Function<number, boolean>, Internal.DoublePredicate {
        composeShort(arg0: Internal.Short2DoubleFunction_): Internal.Short2BooleanFunction;
        composeChar(arg0: Internal.Char2DoubleFunction_): Internal.Char2BooleanFunction;
        andThenByte(arg0: Internal.Boolean2ByteFunction_): Internal.Double2ByteFunction;
        apply(arg0: number): boolean;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): boolean;
        composeByte(arg0: Internal.Byte2DoubleFunction_): Internal.Byte2BooleanFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Double,java.lang.Boolean)"(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Boolean2IntFunction_): Internal.Double2IntFunction;
        abstract get(arg0: number): boolean;
        andThenShort(arg0: Internal.Boolean2ShortFunction_): Internal.Double2ShortFunction;
        and(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: boolean): boolean;
        put(arg0: number, arg1: boolean): boolean;
        andThenObject<T>(arg0: Internal.Boolean2ObjectFunction_<T>): Internal.Double2ObjectFunction<T>;
        "remove(double)"(arg0: number): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<boolean, T>): Internal.Function<number, T>;
        composeObject<T>(arg0: Internal.Object2DoubleFunction_<T>): Internal.Object2BooleanFunction<T>;
        andThenReference<T>(arg0: Internal.Boolean2ReferenceFunction_<T>): Internal.Double2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: boolean): void;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        "getOrDefault(double,boolean)"(arg0: number, arg1: boolean): boolean;
        test(arg0: number): boolean;
        or(arg0: Internal.DoublePredicate_): Internal.DoublePredicate;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        andThenLong(arg0: Internal.Boolean2LongFunction_): Internal.Double2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        "containsKey(double)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, boolean>;
        composeFloat(arg0: Internal.Float2DoubleFunction_): Internal.Float2BooleanFunction;
        composeLong(arg0: Internal.Long2DoubleFunction_): Internal.Long2BooleanFunction;
        composeInt(arg0: Internal.Int2DoubleFunction_): Internal.Int2BooleanFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Boolean2DoubleFunction_): Internal.Double2DoubleFunction;
        andThenChar(arg0: Internal.Boolean2CharFunction_): Internal.Double2CharFunction;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): boolean;
        composeReference<T>(arg0: Internal.Reference2DoubleFunction_<T>): Internal.Reference2BooleanFunction<T>;
        defaultReturnValue(): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Boolean)"(arg0: any, arg1: boolean): boolean;
        composeDouble(arg0: Internal.Double2DoubleFunction_): this;
        "put(double,boolean)"(arg0: number, arg1: boolean): boolean;
        abstract "get(double)"(arg0: number): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: boolean): boolean;
        size(): number;
        andThenFloat(arg0: Internal.Boolean2FloatFunction_): Internal.Double2FloatFunction;
        clear(): void;
        negate(): Internal.DoublePredicate;
        remove(arg0: number): boolean;
    }
    type Double2BooleanFunction_ = Double2BooleanFunction;
    abstract class AbstractMultimap <K, V> implements Internal.Multimap<K, V> {
        getClass(): typeof any;
        replaceValues(arg0: K, arg1: Internal.Iterable_<V>): Internal.Collection<V>;
        abstract removeAll(arg0: any): Internal.Collection<V>;
        entries(): Internal.Collection<Internal.Map$Entry<K, V>>;
        containsValue(arg0: any): boolean;
        isEmpty(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract containsKey(arg0: any): boolean;
        putAll(arg0: K, arg1: Internal.Iterable_<V>): boolean;
        keys(): Internal.Multiset<K>;
        keySet(): Internal.Set<K>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        abstract get(arg0: K): Internal.Collection<V>;
        toString(): string;
        values(): Internal.Collection<V>;
        notifyAll(): void;
        remove(arg0: any, arg1: any): boolean;
        containsEntry(arg0: any, arg1: any): boolean;
        hashCode(): number;
        abstract size(): number;
        putAll(arg0: Internal.Multimap_<K, V>): boolean;
        put(arg0: K, arg1: V): boolean;
        wait(): void;
        abstract clear(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        asMap(): Internal.Map<K, Internal.Collection<V>>;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractMultimap_<K, V> = AbstractMultimap<K, V>;
    class BlockModel implements Internal.BlockModelExtension, Internal.UnbakedModel {
        constructor(arg0: ResourceLocation_, arg1: Internal.List_<Internal.BlockElement>, arg2: Internal.Map_<string, Internal.Either<Internal.Material, string>>, arg3: boolean, arg4: Internal.BlockModel$GuiLight_, arg5: Internal.ItemTransforms_, arg6: Internal.List_<Internal.ItemOverride>)
        getClass(): typeof any;
        hasTexture(arg0: string): boolean;
        getRootModel(): this;
        getDependencies(): Internal.Collection<ResourceLocation>;
        notify(): void;
        getMaterial(arg0: string): Internal.Material;
        wait(arg0: number, arg1: number): void;
        setFusionModel(fusionModel: Internal.ModelInstance_<any>): void;
        /**
         * @deprecated
        */
        bake(arg0: Internal.ModelBaker_, arg1: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>, arg2: Internal.ModelState_, arg3: ResourceLocation_): Internal.BakedModel;
        getOverrides(arg0: Internal.ModelBaker_, arg1: Internal.BlockModel_, arg2: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>): Internal.ItemOverrides;
        findTextureEntry(arg0: string): Internal.Either<Internal.Material, string>;
        getGuiLight(): Internal.BlockModel$GuiLight;
        toString(): string;
        getOverrides(): Internal.List<Internal.ItemOverride>;
        static bakeFace(arg0: Internal.BlockElement_, arg1: Internal.BlockElementFace_, arg2: Internal.TextureAtlasSprite_, arg3: Internal.Direction_, arg4: Internal.ModelState_, arg5: ResourceLocation_): Internal.BakedQuad;
        notifyAll(): void;
        isResolved(): boolean;
        hasAmbientOcclusion(): boolean;
        resolveParents(arg0: Internal.Function_<ResourceLocation, Internal.UnbakedModel>): void;
        hashCode(): number;
        wait(): void;
        /**
         * @deprecated
        */
        getElements(): Internal.List<Internal.BlockElement>;
        wait(arg0: number): void;
        static fromStream(arg0: Internal.Reader_): Internal.BlockModel;
        static fromString(arg0: string): Internal.BlockModel;
        bake(arg0: Internal.ModelBaker_, arg1: Internal.BlockModel_, arg2: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>, arg3: Internal.ModelState_, arg4: ResourceLocation_, arg5: boolean): Internal.BakedModel;
        equals(arg0: any): boolean;
        getTransforms(): Internal.ItemTransforms;
        getFusionModel(): Internal.ModelInstance<any>;
        getParentLocation(): ResourceLocation;
        get class(): typeof any
        get rootModel(): Internal.BlockModel
        get dependencies(): Internal.Collection<ResourceLocation>
        set fusionModel(fusionModel: Internal.ModelInstance_<any>)
        get guiLight(): Internal.BlockModel$GuiLight
        get overrides(): Internal.List<Internal.ItemOverride>
        get resolved(): boolean
        /**
         * @deprecated
        */
        get elements(): Internal.List<Internal.BlockElement>
        get transforms(): Internal.ItemTransforms
        get fusionModel(): Internal.ModelInstance<any>
        get parentLocation(): ResourceLocation
        name: string;
        static readonly GSON: (Internal.Gson) & (Internal.Gson);
        readonly hasAmbientOcclusion: boolean;
        parentLocation: ResourceLocation;
        readonly guiLight: Internal.BlockModel$GuiLight;
        readonly overrides: Internal.List<Internal.ItemOverride>;
        static readonly LOGGER: (Internal.Log4jLogger) & (org.slf4j.Logger);
        parent: Internal.BlockModel;
        readonly elements: Internal.List<Internal.BlockElement>;
        static readonly PARTICLE_TEXTURE_REFERENCE: ("particle") & (string);
        readonly customData: Internal.BlockGeometryBakingContext;
        static readonly FACE_BAKERY: (Internal.FaceBakery) & (Internal.FaceBakery);
        readonly transforms: Internal.ItemTransforms;
        readonly textureMap: Internal.Map<string, Internal.Either<Internal.Material, string>>;
    }
    type BlockModel_ = BlockModel;
    class ChunkDataEvent$Load extends Internal.ChunkDataEvent {
        constructor()
        constructor(arg0: Internal.ChunkAccess_, arg1: Internal.CompoundTag_, arg2: Internal.ChunkStatus$ChunkType_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getChunk(): Internal.ChunkAccess;
        setPhase(arg0: Internal.EventPriority_): void;
        architectury$getAttachedLevel(): Internal.LevelAccessor;
        notifyAll(): void;
        getStatus(): Internal.ChunkStatus$ChunkType;
        isCanceled(): boolean;
        getData(): Internal.CompoundTag;
        architectury$attachLevel(level: Internal.LevelAccessor_): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getLevel(): Internal.LevelAccessor;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get chunk(): Internal.ChunkAccess
        set phase(arg0: Internal.EventPriority_)
        get status(): Internal.ChunkStatus$ChunkType
        get canceled(): boolean
        get data(): Internal.CompoundTag
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get level(): Internal.LevelAccessor
    }
    type ChunkDataEvent$Load_ = ChunkDataEvent$Load;
    interface IRecipeCatalystLookup {
        getItemStack(): Internal.Stream<Internal.ItemStack>;
        abstract includeHidden(): this;
        abstract get(): Internal.Stream<Internal.ITypedIngredient<any>>;
        abstract get<S>(arg0: Internal.IIngredientType_<S>): Internal.Stream<S>;
        get itemStack(): Internal.Stream<Internal.ItemStack>
    }
    type IRecipeCatalystLookup_ = IRecipeCatalystLookup;
    class Resources {
        constructor(resources: Internal.Map_<string, com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<any>>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        merge(resources: Internal.Resources_): void;
        notify(): void;
        static of(...resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<any>[]): Internal.Resources;
        wait(arg0: number, arg1: number): void;
        serializeNBT(): Internal.CompoundTag;
        deserializeNBT(nbt: Internal.CompoundTag_): void;
        hashCode(): number;
        /**
         * @deprecated
        */
        static defaultResource(): Internal.Resources;
        wait(): void;
        wait(arg0: number): void;
        static emptyResource(): Internal.Resources;
        dispose(): void;
        static fromNBT(tag: Internal.CompoundTag_): Internal.Resources;
        load(): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        readonly resources: Internal.Map<string, com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<any>>;
    }
    type Resources_ = Resources;
    class MossBlock extends Internal.Block implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        "setFriction(float)"(arg0: number): void;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        setDrops(arg0: ResourceLocation_): void;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        getBlockProperties(): Internal.BlockBehaviour$Properties;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getId(): string;
        getLootTable(): ResourceLocation;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        /**
         * @deprecated
        */
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        set "friction(float)"(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get descriptionId(): string
        get jumpFactor(): number
        set drops(arg0: ResourceLocation_)
        set speedFactor(arg0: number)
        get blockProperties(): Internal.BlockBehaviour$Properties
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type MossBlock_ = MossBlock;
    class TileAssemblerMatrixGlass extends Internal.TileAssemblerMatrixWall {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        requestModelDataUpdate(): void;
        sodiumdynamiclights$updateDynamicLight(renderer: Internal.LevelRenderer_): boolean;
        disassembleWithWrench(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.BlockHitResult_, arg3: Internal.ItemStack_): Internal.InteractionResult;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        exportSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        setBlockState(arg0: Internal.BlockState_): void;
        load(arg0: Internal.CompoundTag_): void;
        setChanged(): void;
        setName(arg0: string): void;
        getMainNode(): Internal.IManagedGridNode;
        saveWithoutMetadata(): Internal.CompoundTag;
        getGridNode(arg0: Internal.Direction_): Internal.IGridNode;
        isValid(): boolean;
        isCore(): boolean;
        isClientSide(): boolean;
        setRemoved(): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        getSubInventory(arg0: ResourceLocation_): Internal.InternalInventory;
        getType(): Internal.BlockEntityType<any>;
        getActionableNode(): Internal.IGridNode;
        setOwner(arg0: Internal.Player_): void;
        addAdditionalDrops(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.List_<Internal.ItemStack>): void;
        getRenderBoundingBox(): Internal.AABB;
        getCustomName(): net.minecraft.network.chat.Component;
        getDisplayName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        ifGridPresent(arg0: Internal.Consumer_<Internal.IGrid>): boolean;
        static getPosFromTag(arg0: Internal.CompoundTag_): BlockPos;
        markForUpdate(): void;
        getTop(): Internal.Direction;
        sdl$shouldUpdateDynamicLight(): boolean;
        loadTag(arg0: Internal.CompoundTag_): void;
        onChunkUnloaded(): void;
        isActive(): boolean;
        saveToItem(arg0: Internal.ItemStack_): void;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        static addEntityType(arg0: Internal.CompoundTag_, arg1: Internal.BlockEntityType_<any>): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        getUpdatePacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getGlobalPos(): Internal.GlobalPos;
        clearRemoved(): void;
        importSettings(arg0: Internal.SettingsFrom_, arg1: Internal.CompoundTag_, arg2: Internal.Player_): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        setCore(arg0: boolean): void;
        getReadyInvoked(): number;
        sdl$getDynamicLightX(): number;
        getCluster(): Internal.ClusterAssemblerMatrix;
        getCableConnectionType(arg0: Internal.Direction_): Internal.AECableType;
        getPersistentData(): Internal.CompoundTag;
        isFormed(): boolean;
        toString(): string;
        triggerEvent(arg0: number, arg1: number): boolean;
        hasLevel(): boolean;
        notifyAll(): void;
        sdl$dynamicLightTick(): void;
        getGridConnectableSides(arg0: Internal.BlockOrientation_): Internal.Set<Internal.Direction>;
        onReady(): void;
        wait(arg0: number): void;
        static registerBlockEntityItem(arg0: Internal.BlockEntityType_<any>, arg1: Internal.Item_): void;
        clearContent(): void;
        reviveCaps(): void;
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getUpdateTag(): Internal.CompoundTag;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        setLevel(arg0: Internal.Level_): void;
        sdl$getLuminance(): number;
        notify(): void;
        onMainNodeStateChanged(arg0: Internal.IGridNodeListener$State_): void;
        getBlockPos(): BlockPos;
        sdl$resetDynamicLight(): void;
        isRemoved(): boolean;
        onLoad(): void;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        sdl$getDynamicLightY(): number;
        isPowered(): boolean;
        updateStatus(arg0: Internal.ClusterAssemblerMatrix_): void;
        getGridNode(): Internal.IGridNode;
        sodiumdynamiclights$scheduleTrackedChunksRebuild(renderer: Internal.LevelRenderer_): void;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        notLoaded(): boolean;
        getBlockState(): Internal.BlockState;
        getMatrixBlock(): Internal.BlockAssemblerMatrixBase<any>;
        getBlockEntity(): Internal.BlockEntity;
        breakCluster(): void;
        static loadStatic(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.CompoundTag_): Internal.BlockEntity;
        wait(): void;
        disconnect(arg0: boolean): void;
        m_183515_(arg0: Internal.CompoundTag_): void;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        abstract saveChanges(): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        saveWithId(): Internal.CompoundTag;
        updateMultiBlock(arg0: BlockPos_): void;
        getConfigManager(): Internal.IConfigManager;
        sdl$getDynamicLightLevel(): Internal.Level;
        wait(arg0: number, arg1: number): void;
        getLevel(): Internal.Level;
        onlyOpCanSetNbt(): boolean;
        getOrientation(): Internal.BlockOrientation;
        serializeNBT(): Internal.Tag;
        sdl$getDynamicLightZ(): number;
        updateSubType(arg0: boolean): void;
        saveWithFullMetadata(): Internal.CompoundTag;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.BlockEntity>): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getQueuedForReady(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        hashCode(): number;
        getFront(): Internal.Direction;
        getModelData(): Internal.ModelData;
        setPreviousState(arg0: Internal.CompoundTag_): void;
        getPreviousState(): Internal.CompoundTag;
        equals(arg0: any): boolean;
        set blockState(arg0: Internal.BlockState_)
        set name(arg0: string)
        get mainNode(): Internal.IManagedGridNode
        get valid(): boolean
        get core(): boolean
        get clientSide(): boolean
        get type(): Internal.BlockEntityType<any>
        get actionableNode(): Internal.IGridNode
        set owner(arg0: Internal.Player_)
        get renderBoundingBox(): Internal.AABB
        get customName(): net.minecraft.network.chat.Component
        get displayName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get top(): Internal.Direction
        get active(): boolean
        get updatePacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get globalPos(): Internal.GlobalPos
        set core(arg0: boolean)
        get readyInvoked(): number
        get cluster(): Internal.ClusterAssemblerMatrix
        get persistentData(): Internal.CompoundTag
        get formed(): boolean
        get updateTag(): Internal.CompoundTag
        set level(arg0: Internal.Level_)
        get blockPos(): BlockPos
        get removed(): boolean
        get powered(): boolean
        get gridNode(): Internal.IGridNode
        get name(): net.minecraft.network.chat.Component
        get blockState(): Internal.BlockState
        get matrixBlock(): Internal.BlockAssemblerMatrixBase<any>
        get blockEntity(): Internal.BlockEntity
        get configManager(): Internal.IConfigManager
        get level(): Internal.Level
        get orientation(): Internal.BlockOrientation
        get queuedForReady(): number
        get front(): Internal.Direction
        get modelData(): Internal.ModelData
        set previousState(arg0: Internal.CompoundTag_)
        get previousState(): Internal.CompoundTag
    }
    type TileAssemblerMatrixGlass_ = TileAssemblerMatrixGlass;
    class LayeredRegistryAccess <T> {
        constructor(arg0: Internal.List_<T>)
        getClass(): typeof any;
        replaceFrom(arg0: T, ...arg1: Internal.RegistryAccess$Frozen_[]): this;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "replaceFrom(java.lang.Object,java.util.List)"(arg0: T, arg1: Internal.List_<Internal.RegistryAccess$Frozen>): this;
        "replaceFrom(java.lang.Object,net.minecraft.core.RegistryAccess$Frozen[])"(arg0: T, ...arg1: Internal.RegistryAccess$Frozen_[]): this;
        hashCode(): number;
        getLayer(arg0: T): Internal.RegistryAccess$Frozen;
        wait(): void;
        wait(arg0: number): void;
        replaceFrom(arg0: T, arg1: Internal.List_<Internal.RegistryAccess$Frozen>): this;
        getAccessFrom(arg0: T): Internal.RegistryAccess$Frozen;
        getAccessForLoading(arg0: T): Internal.RegistryAccess$Frozen;
        equals(arg0: any): boolean;
        compositeAccess(): Internal.RegistryAccess$Frozen;
        get class(): typeof any
    }
    type LayeredRegistryAccess_<T> = LayeredRegistryAccess<T>;
    class TextHitInfo {
        getClass(): typeof any;
        equals(arg0: Internal.TextHitInfo_): boolean;
        toString(): string;
        notifyAll(): void;
        isLeadingEdge(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getOtherHit(): this;
        getOffsetHit(arg0: number): this;
        "equals(java.awt.font.TextHitInfo)"(arg0: Internal.TextHitInfo_): boolean;
        getCharIndex(): number;
        hashCode(): number;
        wait(): void;
        static trailing(arg0: number): Internal.TextHitInfo;
        static leading(arg0: number): Internal.TextHitInfo;
        wait(arg0: number): void;
        getInsertionIndex(): number;
        "equals(java.lang.Object)"(arg0: any): boolean;
        equals(arg0: any): boolean;
        static beforeOffset(arg0: number): Internal.TextHitInfo;
        static afterOffset(arg0: number): Internal.TextHitInfo;
        get class(): typeof any
        get leadingEdge(): boolean
        get otherHit(): Internal.TextHitInfo
        get charIndex(): number
        get insertionIndex(): number
    }
    type TextHitInfo_ = TextHitInfo;
    interface IFancyUIProvider {
        attachConfigurators(arg0: Internal.ConfiguratorPanel_): void;
        getTabTooltips(): Internal.List<net.minecraft.network.chat.Component>;
        abstract createMainPage(arg0: Internal.FancyMachineUIWidget_): Widget;
        getSubTabs(): Internal.List<Internal.IFancyUIProvider>;
        attachTooltips(arg0: Internal.TooltipsPanel_): void;
        abstract getTitle(): net.minecraft.network.chat.Component;
        hasPlayerInventory(): boolean;
        getTabTooltipComponent(): Internal.TooltipComponent;
        getPageGroupingData(): Internal.IFancyUIProvider$PageGroupingData;
        abstract getTabIcon(): Internal.IGuiTexture;
        attachSideTabs(arg0: Internal.TabsWidget_): void;
        get tabTooltips(): Internal.List<net.minecraft.network.chat.Component>
        get subTabs(): Internal.List<Internal.IFancyUIProvider>
        get title(): net.minecraft.network.chat.Component
        get tabTooltipComponent(): Internal.TooltipComponent
        get pageGroupingData(): Internal.IFancyUIProvider$PageGroupingData
        get tabIcon(): Internal.IGuiTexture
    }
    type IFancyUIProvider_ = IFancyUIProvider;
    class ModelGenerator {
        constructor()
        getClass(): typeof any;
        element(consumer: Internal.Consumer_<Internal.ModelGenerator$Element>): void;
        texture(name: string, texture: string): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        toJson(): Internal.JsonObject;
        wait(arg0: number, arg1: number): void;
        parent(s: string): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        textures(json: Internal.JsonObject_): void;
        get class(): typeof any
    }
    type ModelGenerator_ = ModelGenerator;
    interface DrawContextAccessor {
        abstract invokeDrawTooltip(arg0: net.minecraft.client.gui.Font_, arg1: Internal.List_<Internal.ClientTooltipComponent>, arg2: number, arg3: number, arg4: Internal.ClientTooltipPositioner_): void;
        (arg0: net.minecraft.client.gui.Font, arg1: Internal.List<Internal.ClientTooltipComponent>, arg2: number, arg3: number, arg4: Internal.ClientTooltipPositioner): void;
    }
    type DrawContextAccessor_ = DrawContextAccessor | ((arg0: net.minecraft.client.gui.Font, arg1: Internal.List<Internal.ClientTooltipComponent>, arg2: number, arg3: number, arg4: Internal.ClientTooltipPositioner)=> void);
    interface LongStream$LongMapMultiConsumer {
        abstract accept(arg0: number, arg1: Internal.LongConsumer_): void;
        (arg0: number, arg1: Internal.LongConsumer): void;
    }
    type LongStream$LongMapMultiConsumer_ = LongStream$LongMapMultiConsumer | ((arg0: number, arg1: Internal.LongConsumer)=> void);
    interface ThemeButtonDisplay {
        abstract addThemeToggleButton(arg0: string, arg1: string, arg2: boolean, arg3: Internal.IThemeButton$Action_): Internal.IThemeButton;
        abstract addThemeButton(arg0: string, arg1: string, arg2: string, arg3: Internal.IThemeButton$Action_): Internal.IThemeButton;
        abstract addThemeToggleButton(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: Internal.IThemeButton$Action_): Internal.IThemeButton;
        abstract addThemeButton(arg0: string, arg1: string, arg2: Internal.IThemeButton$Action_): Internal.IThemeButton;
    }
    type ThemeButtonDisplay_ = ThemeButtonDisplay;
    abstract class RenderInfo {
        setUpgradeItems(arg0: Internal.List_<Internal.ItemStack>): void;
        getClass(): typeof any;
        getUpgradeRenderData<T extends Internal.IUpgradeRenderData>(arg0: Internal.UpgradeRenderDataType_<T>): Internal.Optional<T>;
        setBatteryRenderInfo(arg0: Internal.IRenderedBatteryUpgrade$BatteryRenderInfo_): void;
        refreshSlotCountsFillRatiosAndInfiniteSlots(arg0: Internal.List_<number>, arg1: Internal.List_<number>, arg2: Internal.List_<number>): void;
        removeAllUpgradeRenderData(): void;
        getUpgradeItems(): Internal.List<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        deserializeFrom(arg0: Internal.CompoundTag_): void;
        setDisplayItemsChangeListener(arg0: Internal.Consumer_<Internal.RenderInfo>): void;
        getUpgradeRenderData(): Internal.Map<Internal.UpgradeRenderDataType<any>, Internal.IUpgradeRenderData>;
        refreshItemDisplayRenderInfo(arg0: Internal.List_<Internal.RenderInfo$DisplayItem>, arg1: Internal.List_<number>, arg2: Internal.List_<number>, arg3: Internal.List_<number>, arg4: Internal.List_<number>): void;
        resetUpgradeInfo(arg0: boolean): void;
        getNbt(): Internal.CompoundTag;
        toString(): string;
        getItemDisplayRenderInfo(): Internal.RenderInfo$ItemDisplayRenderInfo;
        getBatteryRenderInfo(): Internal.Optional<Internal.IRenderedBatteryUpgrade$BatteryRenderInfo>;
        notifyAll(): void;
        setUpgradeRenderData<T extends Internal.IUpgradeRenderData>(arg0: Internal.UpgradeRenderDataType_<T>, arg1: T): void;
        showsCountsAndFillRatios(): boolean;
        setTankRenderInfo(arg0: Internal.TankPosition_, arg1: Internal.IRenderedTankUpgrade$TankRenderInfo_): void;
        getTankRenderInfos(): Internal.Map<Internal.TankPosition, Internal.IRenderedTankUpgrade$TankRenderInfo>;
        hashCode(): number;
        removeUpgradeRenderData(arg0: Internal.UpgradeRenderDataType_<any>): void;
        refreshDisplayItemsAndInaccessibleSlots(arg0: Internal.List_<Internal.RenderInfo$DisplayItem>, arg1: Internal.List_<number>): void;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        set upgradeItems(arg0: Internal.List_<Internal.ItemStack>)
        get class(): typeof any
        set batteryRenderInfo(arg0: Internal.IRenderedBatteryUpgrade$BatteryRenderInfo_)
        get upgradeItems(): Internal.List<Internal.ItemStack>
        set displayItemsChangeListener(arg0: Internal.Consumer_<Internal.RenderInfo>)
        get upgradeRenderData(): Internal.Map<Internal.UpgradeRenderDataType<any>, Internal.IUpgradeRenderData>
        get nbt(): Internal.CompoundTag
        get itemDisplayRenderInfo(): Internal.RenderInfo$ItemDisplayRenderInfo
        get batteryRenderInfo(): Internal.Optional<Internal.IRenderedBatteryUpgrade$BatteryRenderInfo>
        get tankRenderInfos(): Internal.Map<Internal.TankPosition, Internal.IRenderedTankUpgrade$TankRenderInfo>
    }
    type RenderInfo_ = RenderInfo;
    class ItemStackKey {
        constructor(item: Internal.Item_, tag: Internal.CompoundTag_)
        static of(stack: Internal.ItemStack_): Internal.ItemStackKey;
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(obj: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static EMPTY: (Internal.ItemStackKey) & (Internal.ItemStackKey);
    }
    type ItemStackKey_ = ItemStackKey;
    class MaterialItem extends Internal.AEBaseItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        addToMainCreativeTab(arg0: Internal.CreativeModeTab$Output_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        getRegistryName(): ResourceLocation;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        get registryName(): ResourceLocation
    }
    type MaterialItem_ = MaterialItem;
    interface ContainerSingleItem extends net.minecraft.world.Container {
        stopOpen(arg0: Internal.Player_): void;
        tryClear(arg0: any): void;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        getFirstItem(): Internal.ItemStack;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setFirstItem(arg0: Internal.ItemStack_): void;
        setChanged(): void;
        getContainerSize(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        "setChanged()"(): void;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): net.minecraft.world.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        "isEmpty()"(): boolean;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_): boolean;
        "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,int)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        abstract getItem(arg0: number): Internal.ItemStack;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Internal.Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        removeFirstItem(): Internal.ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        countNonEmpty(): number;
        asContainer(): net.minecraft.world.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: net.minecraft.world.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract stillValid(arg0: Internal.Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        clear(): void;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        "stillValidBlockEntity(net.minecraft.world.level.block.entity.BlockEntity,net.minecraft.world.entity.player.Player,double)"(arg0: Internal.BlockEntity_, arg1: Internal.Player_, arg2: number): boolean;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get firstItem(): Internal.ItemStack
        get slots(): number
        set firstItem(arg0: Internal.ItemStack_)
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get "empty()"(): boolean
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
    }
    type ContainerSingleItem_ = ContainerSingleItem;
    class BlockTransformationUpgradeWrapper extends Internal.UpgradeWrapperBase<Internal.BlockTransformationUpgradeWrapper, Internal.BlockTransformationUpgradeItem> {
        getClass(): typeof any;
        setShiftClickIntoStorage(arg0: boolean): void;
        toString(): string;
        getInputInventory(): Internal.IItemHandlerModifiable;
        notifyAll(): void;
        setEnabled(arg0: boolean): void;
        getUpgradeStack(): Internal.ItemStack;
        isInCooldown(arg0: Internal.Level_): boolean;
        getResult(): Internal.Optional<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        isEnabled(): boolean;
        getCooldownTime(): number;
        canBeDisabled(): boolean;
        hashCode(): number;
        getRecipeType(): Internal.RecipeType<Internal.ChippedRecipe>;
        shouldShiftClickIntoStorage(): boolean;
        hideSettingsTab(): boolean;
        wait(): void;
        wait(arg0: number): void;
        setResult(arg0: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        onAdded(): void;
        onBeforeRemoved(): void;
        get class(): typeof any
        set shiftClickIntoStorage(arg0: boolean)
        get inputInventory(): Internal.IItemHandlerModifiable
        set enabled(arg0: boolean)
        get upgradeStack(): Internal.ItemStack
        get result(): Internal.Optional<Internal.ItemStack>
        get enabled(): boolean
        get cooldownTime(): number
        get recipeType(): Internal.RecipeType<Internal.ChippedRecipe>
        set result(arg0: Internal.ItemStack_)
    }
    type BlockTransformationUpgradeWrapper_ = BlockTransformationUpgradeWrapper;
    class ClientboundUpdateAttributesPacket$AttributeSnapshot {
        constructor(arg0: Internal.Attribute_, arg1: number, arg2: Internal.Collection_<Internal.AttributeModifier>)
        getClass(): typeof any;
        getModifiers(): Internal.Collection<Internal.AttributeModifier>;
        hashCode(): number;
        getBase(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getAttribute(): Internal.Attribute;
        get class(): typeof any
        get modifiers(): Internal.Collection<Internal.AttributeModifier>
        get base(): number
        get attribute(): Internal.Attribute
    }
    type ClientboundUpdateAttributesPacket$AttributeSnapshot_ = ClientboundUpdateAttributesPacket$AttributeSnapshot;
    class KnowledgeBookItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<net.minecraft.network.chat.Component>, arg3: Internal.TooltipFlag_): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        getDescription(): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        getClass(): typeof any;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setCraftingRemainingItemFTBL(arg0: Internal.Item_): void;
        setAttackDamage(attackDamage: number): void;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        toString(): string;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        notify(): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: net.minecraft.network.chat.Component_): net.minecraft.network.chat.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getName(arg0: Internal.ItemStack_): net.minecraft.network.chat.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(stack: Internal.ItemStack_): number;
        shouldOverrideMultiplayerNbt(): boolean;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set burnTime(i: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): net.minecraft.network.chat.Component
        get class(): typeof any
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set craftingRemainingItemFTBL(arg0: Internal.Item_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
    }
    type KnowledgeBookItem_ = KnowledgeBookItem;
    class ByteProcessor$IndexNotOfProcessor implements Internal.ByteProcessor {
        constructor(arg0: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        process(arg0: number): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type ByteProcessor$IndexNotOfProcessor_ = ByteProcessor$IndexNotOfProcessor;
    interface JadeDataProvider {
        abstract collectJadeInfo(arg0: Internal.CompoundTag_): void;
        abstract jadeID(): string;
    }
    type JadeDataProvider_ = JadeDataProvider;
    abstract class EntityModel <T extends Internal.Entity> extends Internal.Model {
        copyPropertiesTo(arg0: Internal.EntityModel_<T>): void;
        getClass(): typeof any;
        toString(): string;
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        notifyAll(): void;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        abstract setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        abstract renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        get class(): typeof any
        riding: boolean;
        attackTime: number;
        young: boolean;
    }
    type EntityModel_<T extends Internal.Entity> = EntityModel<T>;
    class TypedOptic$Element <S, T, A, B> extends Internal.Record {
        constructor(sType: com.mojang.datafixers.types.Type_<S>, tType: com.mojang.datafixers.types.Type_<T>, aType: com.mojang.datafixers.types.Type_<A>, bType: com.mojang.datafixers.types.Type_<B>, optic: Internal.Optic_<any, S, T, A, B>)
        getClass(): typeof any;
        aType(): com.mojang.datafixers.types.Type<A>;
        toString(): string;
        notifyAll(): void;
        tType(): com.mojang.datafixers.types.Type<T>;
        optic(): Internal.Optic<any, S, T, A, B>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        sType(): com.mojang.datafixers.types.Type<S>;
        hashCode(): number;
        wait(): void;
        castOuterUnchecked<S2, T2>(arg0: com.mojang.datafixers.types.Type_<S2>, arg1: com.mojang.datafixers.types.Type_<T2>): Internal.TypedOptic$Element<S2, T2, A, B>;
        bType(): com.mojang.datafixers.types.Type<B>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type TypedOptic$Element_<S, T, A, B> = TypedOptic$Element<S, T, A, B>;
    class InputEvent$MouseButton$Post extends Internal.InputEvent$MouseButton {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        getButton(): number;
        setPhase(arg0: Internal.EventPriority_): void;
        getModifiers(): number;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        getAction(): number;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        get button(): number
        set phase(arg0: Internal.EventPriority_)
        get modifiers(): number
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get action(): number
    }
    type InputEvent$MouseButton$Post_ = InputEvent$MouseButton$Post;
    interface PaletteResize <T> {
        abstract onResize(arg0: number, arg1: T): number;
        (arg0: number, arg1: T): number;
    }
    type PaletteResize_<T> = PaletteResize<T> | ((arg0: number, arg1: T)=> number);
    interface StructurePlacementType <SP extends Internal.StructurePlacement> {
        abstract codec(): Internal.Codec<SP>;
        (): Internal.Codec_<SP>;
        readonly CONCENTRIC_RINGS: Internal.StructurePlacementType<Internal.ConcentricRingsStructurePlacement>;
        readonly RANDOM_SPREAD: Internal.StructurePlacementType<Internal.RandomSpreadStructurePlacement>;
    }
    type StructurePlacementType_<SP extends Internal.StructurePlacement> = (()=> Internal.Codec_<SP>) | StructurePlacementType<SP> | Special.StructurePlacement;
    class ModelBuilder$TransformsBuilder$TransformVecBuilder {
        getClass(): typeof any;
        rightRotation(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        toString(): string;
        notifyAll(): void;
        rotation(arg0: number, arg1: number, arg2: number): this;
        end(): Internal.ModelBuilder$TransformsBuilder<>;
        translation(arg0: number, arg1: number, arg2: number): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        leftRotation(arg0: number, arg1: number, arg2: number): this;
        hashCode(): number;
        scale(arg0: number): this;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ModelBuilder$TransformsBuilder$TransformVecBuilder_ = ModelBuilder$TransformsBuilder$TransformVecBuilder;
    interface TelemetrySession {
        abstract createNewEvent(arg0: string): Internal.TelemetryEvent;
        abstract isEnabled(): boolean;
        get enabled(): boolean
        readonly DISABLED: Internal.TelemetrySession;
    }
    type TelemetrySession_ = TelemetrySession;
    class PlayerEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.Player_)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get entity(): Internal.LivingEntity
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type PlayerEvent_ = PlayerEvent;
    class LevelSummary$BackupStatus extends Internal.Enum<Internal.LevelSummary$BackupStatus> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static valueOf(arg0: string): Internal.LevelSummary$BackupStatus;
        toString(): string;
        notifyAll(): void;
        getTranslationKey(): string;
        shouldBackup(): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.LevelSummary$BackupStatus>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        isSevere(): boolean;
        "compareTo(net.minecraft.world.level.storage.LevelSummary$BackupStatus)"(arg0: Internal.LevelSummary$BackupStatus_): number;
        getDeclaringClass(): typeof Internal.LevelSummary$BackupStatus;
        compareTo(arg0: Internal.LevelSummary$BackupStatus_): number;
        ordinal(): number;
        wait(): void;
        static values(): Internal.LevelSummary$BackupStatus[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get translationKey(): string
        get severe(): boolean
        get declaringClass(): typeof Internal.LevelSummary$BackupStatus
        static readonly DOWNGRADE: (Internal.LevelSummary$BackupStatus) & (Internal.LevelSummary$BackupStatus);
        static readonly UPGRADE_TO_SNAPSHOT: (Internal.LevelSummary$BackupStatus) & (Internal.LevelSummary$BackupStatus);
        static readonly NONE: (Internal.LevelSummary$BackupStatus) & (Internal.LevelSummary$BackupStatus);
    }
    type LevelSummary$BackupStatus_ = "upgrade_to_snapshot" | "downgrade" | LevelSummary$BackupStatus | "none";
    class Material$MaterialInfo {
        getClass(): typeof any;
        getIconSet(): GTMaterialIconSet;
        setIconSet(arg0: GTMaterialIconSet_): this;
        setOverriddenName(arg0: string): this;
        toString(): string;
        notifyAll(): void;
        setElement(arg0: Internal.Element_): this;
        setHasFluidColor(arg0: boolean): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getComponentList(): Internal.ImmutableList<Internal.MaterialStack>;
        isHasFluidColor(): boolean;
        setColors(arg0: Internal.IntList_): this;
        hashCode(): number;
        setComponentList(arg0: Internal.ImmutableList_<Internal.MaterialStack>): this;
        getColors(): Internal.IntList;
        wait(): void;
        getElement(): Internal.Element;
        getOverriddenName(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setComponents(...arg0: Internal.MaterialStack_[]): this;
        get class(): typeof any
        get iconSet(): GTMaterialIconSet
        set iconSet(arg0: GTMaterialIconSet_)
        set overriddenName(arg0: string)
        set element(arg0: Internal.Element_)
        set hasFluidColor(arg0: boolean)
        get componentList(): Internal.ImmutableList<Internal.MaterialStack>
        get hasFluidColor(): boolean
        set colors(arg0: Internal.IntList_)
        set componentList(arg0: Internal.ImmutableList_<Internal.MaterialStack>)
        get colors(): Internal.IntList
        get element(): Internal.Element
        get overriddenName(): string
        set components(...arg0: Internal.MaterialStack_[])
    }
    type Material$MaterialInfo_ = Material$MaterialInfo;
    class Drowned extends Internal.Zombie implements Internal.RangedAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.Drowned>, arg1: Internal.Level_)
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        static checkMobSpawnRules(arg0: Internal.EntityType_<Internal.Mob>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isSuppressingBounce(): boolean;
        setTarget(arg0: Internal.LivingEntity_): void;
        isOnFire(): boolean;
        getPositionCodec(): Internal.VecDeltaCodec;
        setCanBreakDoors(arg0: boolean): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        convertTo<T extends Internal.Mob>(arg0: Internal.EntityType_<T>, arg1: boolean): T;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        dropLeash(arg0: boolean, arg1: boolean): void;
        gameEvent(arg0: Internal.GameEvent_): void;
        setXxa(arg0: number): void;
        setDelayedLeashHolderId(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        setMotionZ(z: number): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getBlockY(): number;
        isSpectator(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        getHealth(): number;
        getMaxHealth(): number;
        setPathfindingMalus(arg0: Internal.BlockPathTypes_, arg1: number): void;
        getRandomZ(arg0: number): number;
        setAggressive(arg0: boolean): void;
        getFusionModel(layerIndex: number): Internal.Triple<any, any, any>;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        isInWaterRainOrBubble(): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        getRemovalReason(): Internal.Entity$RemovalReason;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setZza(arg0: number): void;
        getBlock(): Internal.BlockContainerJS;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        invalidateCaps(): void;
        getName(): net.minecraft.network.chat.Component;
        playAmbientSound(): void;
        onGround(): boolean;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        getKillCredit(): Internal.LivingEntity;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        sinkInFluid(arg0: Internal.FluidType_): void;
        hasPermissions(arg0: number): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        static createMobAttributes(): Internal.AttributeSupplier$Builder;
        isAutoSpinAttack(): boolean;
        getRemainingFireTicks(): number;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        getTicksFrozen(): number;
        getRandomX(arg0: number): number;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        getVoicePitch(): number;
        setStatusMessage(message: net.minecraft.network.chat.Component_): void;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getHeadRotSpeed(): number;
        getYHeadRot(): number;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        static checkDrownedSpawnRules(arg0: Internal.EntityType_<Internal.Drowned>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        damageSources(): Internal.DamageSources;
        removeAllGoals(arg0: Internal.Predicate_<Internal.Goal>): void;
        swing(): void;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        getWalkTargetValue(arg0: BlockPos_): number;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        removeAllEffects(): boolean;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getLeashHolder(): Internal.Entity;
        getX(arg0: number): number;
        getSensing(): Internal.Sensing;
        getLegsArmorItem(): Internal.ItemStack;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        "getDisplayName()"(): net.minecraft.network.chat.Component;
        getLootTable(): ResourceLocation;
        getTicksUsingItem(): number;
        getArrowCount(): number;
        getMoveControl(): Internal.MoveControl;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        ate(): void;
        setPos(arg0: number, arg1: number, arg2: number): void;
        notify(): void;
        getFirstTick(): boolean;
        setPersistenceRequired(): void;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        setSpawnCancelled(arg0: boolean): void;
        getStringUuid(): string;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        checkSpawnRules(arg0: Internal.LevelAccessor_, arg1: Internal.MobSpawnType_): boolean;
        getRotationVector(): Internal.Vec2;
        abstract sdl$getDynamicLightY(): number;
        getHurtDir(): number;
        isSprinting(): boolean;
        isMaxGroupSizeReached(arg0: number): boolean;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        canCollideWith(arg0: Internal.Entity_): boolean;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        gtceu$setFireImmune(arg0: boolean): void;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        handler$zgg001$onTick(ci: Internal.CallbackInfo_): void;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        setPositionAndRotation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        getRestrictCenter(): BlockPos;
        isLeftHanded(): boolean;
        removeVehicle(): void;
        shouldFusionRecomputeModel(layerIndex: number): boolean;
        setZ(z: number): void;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        isWithinMeleeAttackRange(arg0: Internal.LivingEntity_): boolean;
        static checkMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        isPushedByFluid(): boolean;
        getArmorCoverPercentage(): number;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getAirSupply(): number;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        sdl$isDynamicLightEnabled(): boolean;
        lavaHurt(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getTotalMovementSpeed(): number;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getAttributes(): Internal.AttributeMap;
        isSpawnCancelled(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        abstract sdl$getDynamicLightX(): number;
        isSwimming(): boolean;
        setSprinting(arg0: boolean): void;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        canBreakDoors(): boolean;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getBlockStateOn(): Internal.BlockState;
        getPortalWaitTime(): number;
        wantsToPickUp(arg0: Internal.ItemStack_): boolean;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        stopSleeping(): void;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        isUndead(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        getStepHeight(): number;
        stopUsingItem(): void;
        isSleeping(): boolean;
        acceptsFailure(): boolean;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        static createMonsterAttributes(): Internal.AttributeSupplier$Builder;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        setPos(arg0: Vec3d_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setCanPickUpLoot(arg0: boolean): void;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        setSilent(arg0: boolean): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        setLeftHanded(arg0: boolean): void;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        isAlwaysTicking(): boolean;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getForgePersistentData(): Internal.CompoundTag;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        isInFluidType(): boolean;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        setLeashedTo(arg0: Internal.Entity_, arg1: boolean): void;
        isAlive(): boolean;
        startSleeping(arg0: BlockPos_): void;
        getBbHeight(): number;
        getMeleeAttackRangeSqr(arg0: Internal.LivingEntity_): number;
        getViewVector(arg0: number): Vec3d;
        getTags(): Internal.Set<string>;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        onPathfindingStart(): void;
        getPercentFrozen(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        isUnderWaterConverting(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        isLeashed(): boolean;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        setPose(arg0: Internal.Pose_): void;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        setRotation(yaw: number, pitch: number): void;
        abstract sdl$resetDynamicLight(): void;
        calculateEntityAnimation(arg0: boolean): void;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        abstract sodiumdynamiclights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        hasPose(arg0: Internal.Pose_): boolean;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        getJumpControl(): Internal.JumpControl;
        getFeetArmorItem(): Internal.ItemStack;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        setSpeed(arg0: number): void;
        requiresCustomPersistence(): boolean;
        isDiscrete(): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        isNoAi(): boolean;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        tell(message: net.minecraft.network.chat.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        isFullyFrozen(): boolean;
        isInWall(): boolean;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        getScale(): number;
        handler$zgg000$onRemove(ci: Internal.CallbackInfo_): void;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        isSilent(): boolean;
        "playSound(net.minecraft.sounds.SoundEvent)"(arg0: Internal.SoundEvent_): void;
        getPitch(): number;
        getPathfindingMalus(arg0: Internal.BlockPathTypes_): number;
        getRandom(): Internal.RandomSource;
        canReplaceEqualItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        rotate(arg0: Internal.Rotation_): number;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        breakItem(arg0: Internal.ItemStack_): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        clearRestriction(): void;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        isAggressive(): boolean;
        setYya(arg0: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        abstract sdl$shouldUpdateDynamicLight(): boolean;
        setDropChance(arg0: Internal.EquipmentSlot_, arg1: number): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        setBaby(arg0: boolean): void;
        getLastHurtByMob(): Internal.LivingEntity;
        isInWaterOrBubble(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        removeFreeWill(): void;
        removeWhenFarAway(arg0: number): boolean;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        canUpdate(arg0: boolean): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        isSteppingCarefully(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getY(arg0: number): number;
        getMaxHeadXRot(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        onInsideBubbleColumn(arg0: boolean): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        setSearchingForLand(arg0: boolean): void;
        getControllingPassenger(): Internal.LivingEntity;
        canFireProjectileWeapon(arg0: Internal.ProjectileWeaponItem_): boolean;
        getScriptType(): Internal.ScriptType;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        serializeNBT(): Internal.Tag;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getId(): number;
        canBeHitByProjectile(): boolean;
        getEyeY(): number;
        skipDropExperience(): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        dismountsUnderwater(): boolean;
        abstract sodiumdynamiclights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        isAffectedByPotions(): boolean;
        playerTouch(arg0: Internal.Player_): void;
        addTag(arg0: string): boolean;
        getEyeHeight(arg0: Internal.Pose_): number;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        static getEquipmentForSlot(arg0: Internal.EquipmentSlot_, arg1: number): Internal.Item;
        isWithinRestriction(arg0: BlockPos_): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        hasCustomName(): boolean;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        isVehicle(): boolean;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: net.minecraft.network.chat.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        getMaxHeadYRot(): number;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        canBeLeashed(arg0: Internal.Player_): boolean;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        sdl$dynamicLightTick(): void;
        handleInsidePortal(arg0: BlockPos_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        isOnRails(): boolean;
        getStingerCount(): number;
        markFusionRecomputeModels(): void;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        getDimensionChangingDelay(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        isPathFinding(): boolean;
        isRemoved(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        spawnAnim(): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        self(): Internal.Entity;
        refreshDimensions(): void;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getMaxHeightFluidType(): Internal.FluidType;
        getZ(): number;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        okTarget(arg0: Internal.LivingEntity_): boolean;
        getSpawnType(): Internal.MobSpawnType;
        setLastHurtMob(arg0: Internal.Entity_): void;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        abstract sdl$getDynamicLightLevel(): Internal.Level;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        invokeSetLevel(arg0: Internal.Level_): void;
        checkSlowFallDistance(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        abstract sdl$getDynamicLightZ(): number;
        getLookAngle(): Vec3d;
        getAmbientSoundInterval(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        isPersistenceRequired(): boolean;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        getBedOrientation(): Internal.Direction;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        getProfile(): Internal.GameProfile;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        getLookControl(): Internal.LookControl;
        isPreventingPlayerRest(arg0: Internal.Player_): boolean;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        isCrouching(): boolean;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        isWithinRestriction(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        static getSpawnAsBabyOdds(arg0: Internal.RandomSource_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        baseTick(): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        setSharedFlag(arg0: number, arg1: boolean): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): net.minecraft.network.chat.Component;
        getClass(): typeof any;
        "self()"(): Internal.Entity;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        getTarget(): Internal.LivingEntity;
        restrictTo(arg0: BlockPos_, arg1: number): void;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        finalizeSpawn(arg0: Internal.ServerLevelAccessor_, arg1: Internal.DifficultyInstance_, arg2: Internal.MobSpawnType_, arg3: Internal.SpawnGroupData_, arg4: Internal.CompoundTag_): Internal.SpawnGroupData;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        swing(arg0: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        setFusionModel(layerIndex: number, model: Internal.Triple_<any, any, any>): void;
        getRootVehicle(): Internal.Entity;
        onPathfindingDone(): void;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        sdl$getLuminance(): number;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        spawn(): void;
        setNoAi(arg0: boolean): void;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        shouldShowName(): boolean;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        canPickUpLoot(): boolean;
        kill(): void;
        onEnterCombat(): void;
        animateHurt(arg0: number): void;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        hasRestriction(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        deserializeNBT(arg0: Internal.Tag_): void;
        revive(): void;
        getBbWidth(): number;
        static checkAnyLightMonsterSpawnRules(arg0: Internal.EntityType_<Internal.Monster>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): net.minecraft.network.chat.Component;
        mirror(arg0: Internal.Mirror_): number;
        canUpdate(): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTicksRequiredToFreeze(): number;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        getMaxSpawnClusterSize(): number;
        getUsername(): string;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        setJumping(arg0: boolean): void;
        handler$zmn000$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getPickResult(): Internal.ItemStack;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        getDisplayName(): net.minecraft.network.chat.Component;
        getMobType(): Internal.MobType;
        travel(arg0: Vec3d_): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        shouldBeSaved(): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        removeTag(arg0: string): boolean;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        discard(): void;
        sendSystemMessage(arg0: net.minecraft.network.chat.Component_): void;
        acceptsSuccess(): boolean;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        getNavigation(): Internal.PathNavigation;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        getPerceivedTargetDistanceSquareForMeleeAttack(arg0: Internal.LivingEntity_): number;
        getHorizontalFacing(): Internal.Direction;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        getLightProbePosition(arg0: number): Vec3d;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        static isDarkEnoughToSpawn(arg0: Internal.ServerLevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_): boolean;
        checkDespawn(): void;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        lookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        equipItemIfPossible(arg0: Internal.ItemStack_): Internal.ItemStack;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        canDisableShield(): boolean;
        setMotionX(x: number): void;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        checkSpawnObstruction(arg0: Internal.LevelReader_): boolean;
        extinguish(): void;
        getRestrictRadius(): number;
        moveTo(arg0: Vec3d_): void;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        "swing(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        isInvertedHealAndHarm(): boolean;
        canHoldItem(arg0: Internal.ItemStack_): boolean;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        runCommand(command: string): number;
        setGuaranteedDrop(arg0: Internal.EquipmentSlot_): void;
        setSharedFlagOnFire(arg0: boolean): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set target(arg0: Internal.LivingEntity_)
        get onFire(): boolean
        get positionCodec(): Internal.VecDeltaCodec
        set canBreakDoors(arg0: boolean)
        set maxUpStep(arg0: number)
        get fallFlyingTicks(): number
        set xxa(arg0: number)
        set delayedLeashHolderId(arg0: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get blockY(): number
        get spectator(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set aggressive(arg0: boolean)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set zza(arg0: number)
        get block(): Internal.BlockContainerJS
        get name(): net.minecraft.network.chat.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        get ticksFrozen(): number
        get voicePitch(): number
        set statusMessage(message: net.minecraft.network.chat.Component_)
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get headRotSpeed(): number
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        set deltaMovement(arg0: Vec3d_)
        get baby(): boolean
        get glowing(): boolean
        get attackable(): boolean
        get underWater(): boolean
        get leashHolder(): Internal.Entity
        get sensing(): Internal.Sensing
        get legsArmorItem(): Internal.ItemStack
        get deltaMovement(): Vec3d
        set secondsOnFire(arg0: number)
        get "displayName()"(): net.minecraft.network.chat.Component
        get lootTable(): ResourceLocation
        get ticksUsingItem(): number
        get arrowCount(): number
        get moveControl(): Internal.MoveControl
        get defaultMovementSpeed(): number
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        set spawnCancelled(arg0: boolean)
        get stringUuid(): string
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get pose(): Internal.Pose
        get restrictCenter(): BlockPos
        get leftHanded(): boolean
        set z(z: number)
        get y(): number
        get blocking(): boolean
        get pushedByFluid(): boolean
        get armorCoverPercentage(): number
        get airSupply(): number
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get totalMovementSpeed(): number
        get attributes(): Internal.AttributeMap
        get spawnCancelled(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get blockStateOn(): Internal.BlockState
        get portalWaitTime(): number
        get fluidJumpThreshold(): number
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get stepHeight(): number
        get sleeping(): boolean
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        set canPickUpLoot(arg0: boolean)
        get mainHandItem(): Internal.ItemStack
        set silent(arg0: boolean)
        set leftHanded(arg0: boolean)
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get alive(): boolean
        get bbHeight(): number
        get tags(): Internal.Set<string>
        get lastAttacker(): Internal.LivingEntity
        get percentFrozen(): number
        set portalCooldown(arg0: number)
        get underWaterConverting(): boolean
        set position(block: Internal.BlockContainerJS_)
        get leashed(): boolean
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        set chestArmorItem(item: Internal.ItemStack_)
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get jumpControl(): Internal.JumpControl
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get noAi(): boolean
        get chestArmorItem(): Internal.ItemStack
        get fullyFrozen(): boolean
        get inWall(): boolean
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get aggressive(): boolean
        set yya(arg0: number)
        set baby(arg0: boolean)
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get maxHeadXRot(): number
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        set totalMovementSpeedMultiplier(speed: number)
        set health(arg0: number)
        get eyePosition(): Vec3d
        get eyeHeight(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        set searchingForLand(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get eyeY(): number
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: net.minecraft.network.chat.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get maxHeadYRot(): number
        get customNameVisible(): boolean
        get pistonPushReaction(): Internal.PushReaction
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get potionEffects(): Internal.EntityPotionEffectsJS
        get onRails(): boolean
        get stingerCount(): number
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        set yaw(arg0: number)
        get pickRadius(): number
        get pathFinding(): boolean
        get removed(): boolean
        get jumpBoostPower(): number
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get spawnType(): Internal.MobSpawnType
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get ambientSoundInterval(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get persistenceRequired(): boolean
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get lookControl(): Internal.LookControl
        get offHandItem(): Internal.ItemStack
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get withinRestriction(): boolean
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): net.minecraft.network.chat.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get boundingBoxForCulling(): Internal.AABB
        get target(): Internal.LivingEntity
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        get speed(): number
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set noAi(arg0: boolean)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get headArmorItem(): Internal.ItemStack
        get bbWidth(): number
        get "name()"(): net.minecraft.network.chat.Component
        get ticksRequiredToFreeze(): number
        get maxSpawnClusterSize(): number
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): net.minecraft.network.chat.Component
        get mobType(): Internal.MobType
        get passengersRidingOffset(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get navigation(): Internal.PathNavigation
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        set motionX(x: number)
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get restrictRadius(): number
        get invertedHealAndHarm(): boolean
        get freezing(): boolean
        set guaranteedDrop(arg0: Internal.EquipmentSlot_)
        set sharedFlagOnFire(arg0: boolean)
        static readonly NAUTILUS_SHELL_CHANCE: (0.03) & (number);
    }
    type Drowned_ = Drowned;
    class RenderStateShard$BooleanStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_, arg3: boolean)
        getClass(): typeof any;
        clearRenderState(): void;
        hashCode(): number;
        toString(): string;
        setupRenderState(): void;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type RenderStateShard$BooleanStateShard_ = RenderStateShard$BooleanStateShard;
}
declare namespace org.apache.logging.log4j {
    interface Logger {
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "warn(java.lang.CharSequence,java.lang.Throwable)"(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "info(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "trace(org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract getLevel(): org.apache.logging.log4j.Level;
        abstract "fatal(java.lang.String,java.lang.Throwable)"(message: string, throwable: Internal.Throwable_): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract warn(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract printf(level: org.apache.logging.log4j.Level_, format: string, ...params: any[]): void;
        abstract "debug(org.apache.logging.log4j.util.Supplier)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "debug(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "error(java.lang.String,java.lang.Object[])"(message: string, ...params: any[]): void;
        abstract error(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract catching(level: org.apache.logging.log4j.Level_, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "warn(org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "warn(java.lang.String,java.lang.Throwable)"(message: string, throwable: Internal.Throwable_): void;
        abstract fatal(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract info(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract traceEntry(message: org.apache.logging.log4j.message.Message_): Internal.EntryMessage;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "warn(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract debug(messageSupplier: Internal.MessageSupplier_): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract info(message: any): void;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract trace(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "traceExit(org.apache.logging.log4j.message.EntryMessage,java.lang.Object)"<R>(message: Internal.EntryMessage_, result: R): R;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): void;
        abstract trace(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.Object,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, message: any, throwable: Internal.Throwable_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract error(message: string, p0: any, p1: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract getName(): string;
        abstract info(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.CharSequence)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "trace(org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract debug(message: string, p0: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract fatal(message: string, p0: any, p1: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract info(message: string, p0: any, p1: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        atDebug(): Internal.LogBuilder;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract catching(throwable: Internal.Throwable_): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract info(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract trace(message: any): void;
        abstract "trace(org.apache.logging.log4j.util.Supplier)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract trace(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "trace(java.lang.String,java.lang.Object[])"(message: string, ...params: any[]): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "traceExit(org.apache.logging.log4j.message.EntryMessage)"(message: Internal.EntryMessage_): void;
        abstract "debug(java.lang.CharSequence)"(message: Internal.CharSequence_): void;
        abstract warn(message: string, p0: any, p1: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "fatal(java.lang.String,java.lang.Object[])"(message: string, ...params: any[]): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract warn(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        /**
         * @deprecated
        */
        abstract exit(): void;
        abstract "trace(java.lang.Object,java.lang.Throwable)"(message: any, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "warn(org.apache.logging.log4j.util.Supplier)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "fatal(java.lang.String)"(message: string): void;
        abstract "traceEntry(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): Internal.EntryMessage;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract traceExit(): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "trace(java.lang.String)"(message: string): void;
        logMessage(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, fqcn: string, location: Internal.StackTraceElement_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.message.Message,java.lang.Throwable)"(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract info(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: any): void;
        /**
         * @deprecated
        */
        abstract exit<R>(result: R): R;
        abstract trace(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "fatal(org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract traceExit<R>(message: Internal.EntryMessage_, result: R): R;
        abstract "log(org.apache.logging.log4j.Level,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract error(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract info(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "info(java.lang.CharSequence)"(message: Internal.CharSequence_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract fatal(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object[])"(level: org.apache.logging.log4j.Level_, message: string, ...params: any[]): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.CharSequence)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "trace(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "trace(java.lang.String,java.lang.Object)"(message: string, p0: any): void;
        abstract traceExit<R>(result: R): R;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.util.Supplier)"(level: org.apache.logging.log4j.Level_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "warn(org.apache.logging.log4j.util.MessageSupplier)"(messageSupplier: Internal.MessageSupplier_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract error(message: org.apache.logging.log4j.message.Message_): void;
        abstract fatal(message: org.apache.logging.log4j.message.Message_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.CharSequence)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "error(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "warn(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "trace(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.util.MessageSupplier)"(messageSupplier: Internal.MessageSupplier_): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract warn(message: Internal.CharSequence_): void;
        abstract "error(org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract isTraceEnabled(): boolean;
        abstract "info(java.lang.String)"(message: string): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "warn(java.lang.String,java.lang.Object[])"(message: string, ...params: any[]): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any): void;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: any): void;
        atWarn(): Internal.LogBuilder;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract isWarnEnabled(marker: org.apache.logging.log4j.Marker_): boolean;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any): void;
        abstract "error(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "error(java.lang.CharSequence)"(message: Internal.CharSequence_): void;
        abstract traceEntry(): Internal.EntryMessage;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract trace(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String)"(level: org.apache.logging.log4j.Level_, message: string): void;
        abstract "info(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract trace(message: any, throwable: Internal.Throwable_): void;
        abstract "error(java.lang.String)"(message: string): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract debug(message: string, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, throwable: Internal.Throwable_): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        atLevel(level: org.apache.logging.log4j.Level_): Internal.LogBuilder;
        abstract "fatal(java.lang.Object)"(message: any): void;
        abstract "fatal(org.apache.logging.log4j.message.Message,java.lang.Throwable)"(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "traceEntry(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(format: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): Internal.EntryMessage;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract traceExit<R>(format: string, result: R): R;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract debug(message: string): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract trace(message: org.apache.logging.log4j.message.Message_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.CharSequence)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String)"(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "warn(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract traceEntry(...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): Internal.EntryMessage;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract error(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        atInfo(): Internal.LogBuilder;
        abstract "traceExit(java.lang.Object)"<R>(result: R): R;
        abstract fatal(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract "info(java.lang.String,java.lang.Object[])"(message: string, ...params: any[]): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "fatal(org.apache.logging.log4j.util.MessageSupplier)"(messageSupplier: Internal.MessageSupplier_): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "error(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract warn(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract warn(message: any): void;
        abstract "info(org.apache.logging.log4j.util.MessageSupplier)"(messageSupplier: Internal.MessageSupplier_): void;
        abstract "error(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract warn(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract info(message: Internal.CharSequence_): void;
        abstract "fatal(org.apache.logging.log4j.util.Supplier)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any): void;
        abstract "error(org.apache.logging.log4j.message.Message,java.lang.Throwable)"(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract trace(messageSupplier: Internal.MessageSupplier_): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract warn(message: string): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract error(message: any, throwable: Internal.Throwable_): void;
        abstract traceExit(message: Internal.EntryMessage_): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "trace(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: Internal.CharSequence_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String)"(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "info(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract debug(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.CharSequence)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "warn(java.lang.Object,java.lang.Throwable)"(message: any, throwable: Internal.Throwable_): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract fatal(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract error(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "trace(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract fatal(message: any, throwable: Internal.Throwable_): void;
        abstract "debug(java.lang.Object,java.lang.Throwable)"(message: any, throwable: Internal.Throwable_): void;
        abstract isEnabled(level: org.apache.logging.log4j.Level_): boolean;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, message: string, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract isEnabled(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_): boolean;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "fatal(java.lang.CharSequence,java.lang.Throwable)"(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "fatal(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(level: org.apache.logging.log4j.Level_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.CharSequence)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "error(java.lang.Object)"(message: any): void;
        abstract "debug(java.lang.String,java.lang.Object)"(message: string, p0: any): void;
        abstract error(message: string, ...params: any[]): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract "info(java.lang.Object)"(message: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "fatal(java.lang.CharSequence)"(message: Internal.CharSequence_): void;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "info(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "debug(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "trace(java.lang.CharSequence,java.lang.Throwable)"(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "debug(java.lang.CharSequence,java.lang.Throwable)"(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract warn(message: string, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        atFatal(): Internal.LogBuilder;
        abstract debug(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.CharSequence)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract info(message: string, p0: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.util.MessageSupplier)"(level: org.apache.logging.log4j.Level_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "info(org.apache.logging.log4j.message.Message,java.lang.Throwable)"(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.CharSequence,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "warn(org.apache.logging.log4j.message.Message,java.lang.Throwable)"(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract fatal(message: string, ...params: any[]): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract debug(message: string, p0: any, p1: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract info(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract trace(message: string, p0: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract debug(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract throwing<T extends Internal.Throwable>(throwable: T): T;
        abstract "error(java.lang.CharSequence,java.lang.Throwable)"(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract getMessageFactory<MF extends Internal.MessageFactory>(): MF;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract error(message: string, p0: any, p1: any, p2: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract error(messageSupplier: Internal.MessageSupplier_): void;
        abstract warn(message: string, ...params: any[]): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract throwing<T extends Internal.Throwable>(level: org.apache.logging.log4j.Level_, throwable: T): T;
        abstract isErrorEnabled(): boolean;
        abstract debug(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "trace(org.apache.logging.log4j.util.MessageSupplier)"(messageSupplier: Internal.MessageSupplier_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any): void;
        abstract fatal(messageSupplier: Internal.MessageSupplier_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract debug(message: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract isFatalEnabled(marker: org.apache.logging.log4j.Marker_): boolean;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "error(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract isInfoEnabled(): boolean;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract isInfoEnabled(marker: org.apache.logging.log4j.Marker_): boolean;
        abstract info(message: string, ...params: any[]): void;
        abstract info(messageSupplier: Internal.MessageSupplier_): void;
        abstract isErrorEnabled(marker: org.apache.logging.log4j.Marker_): boolean;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.CharSequence)"(level: org.apache.logging.log4j.Level_, message: Internal.CharSequence_): void;
        abstract error(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any): void;
        abstract fatal(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract traceEntry(format: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): Internal.EntryMessage;
        abstract trace(message: string, ...params: any[]): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract debug(message: org.apache.logging.log4j.message.Message_): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract warn(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract info(message: string, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "error(java.lang.String,java.lang.Object)"(message: string, p0: any): void;
        abstract warn(messageSupplier: Internal.MessageSupplier_): void;
        abstract warn(message: string, p0: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract isFatalEnabled(): boolean;
        atTrace(): Internal.LogBuilder;
        abstract info(message: string): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String)"(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract isDebugEnabled(marker: org.apache.logging.log4j.Marker_): boolean;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract trace(message: string): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "debug(java.lang.String,java.lang.Throwable)"(message: string, throwable: Internal.Throwable_): void;
        abstract "warn(java.lang.Object)"(message: any): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "info(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract info(message: any, throwable: Internal.Throwable_): void;
        abstract trace(message: string, p0: any, p1: any, p2: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "warn(java.lang.String)"(message: string): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract "trace(java.lang.Object)"(message: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract isDebugEnabled(): boolean;
        abstract "fatal(java.lang.Object,java.lang.Throwable)"(message: any, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract error(message: string, p0: any): void;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract "traceExit(org.apache.logging.log4j.message.Message,java.lang.Object)"<R>(message: org.apache.logging.log4j.message.Message_, result: R): R;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract "warn(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "debug(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "fatal(org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract traceEntry(format: string, ...params: any[]): Internal.EntryMessage;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract trace(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        atError(): Internal.LogBuilder;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "debug(java.lang.Object)"(message: any): void;
        abstract debug(message: Internal.CharSequence_): void;
        abstract "traceEntry(org.apache.logging.log4j.util.Supplier[])"(...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): Internal.EntryMessage;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract info(message: string, p0: any, p1: any, p2: any): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String)"(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract "fatal(org.apache.logging.log4j.message.Message)"(message: org.apache.logging.log4j.message.Message_): void;
        abstract debug(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        /**
         * @deprecated
        */
        abstract entry(...params: any[]): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract "traceExit(java.lang.String,java.lang.Object)"<R>(format: string, result: R): R;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract fatal(message: string, p0: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract error(message: string): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract fatal(message: string): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract printf(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, format: string, ...params: any[]): void;
        abstract "fatal(java.lang.String,java.lang.Object)"(message: string, p0: any): void;
        abstract "warn(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        always(): Internal.LogBuilder;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "info(java.lang.String,java.lang.Throwable)"(message: string, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.message.Message)"(level: org.apache.logging.log4j.Level_, message: org.apache.logging.log4j.message.Message_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "debug(java.lang.String,org.apache.logging.log4j.util.Supplier[])"(message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any): void;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract "traceEntry(java.lang.String,java.lang.Object[])"(format: string, ...params: any[]): Internal.EntryMessage;
        abstract "trace(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "trace(org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract "trace(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "info(java.lang.Object,java.lang.Throwable)"(message: any, throwable: Internal.Throwable_): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract isTraceEnabled(marker: org.apache.logging.log4j.Marker_): boolean;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract warn(message: org.apache.logging.log4j.message.Message_): void;
        abstract "error(java.lang.String,java.lang.Throwable)"(message: string, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.util.Supplier)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract isWarnEnabled(): boolean;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract debug(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "debug(org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "warn(java.lang.String,java.lang.Object)"(message: string, p0: any): void;
        abstract "error(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract error(message: Internal.CharSequence_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract fatal(message: Internal.CharSequence_): void;
        abstract "info(org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "debug(java.lang.String,java.lang.Object[])"(message: string, ...params: any[]): void;
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any): void;
        abstract "error(org.apache.logging.log4j.util.Supplier)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract error(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "debug(java.lang.String)"(message: string): void;
        /**
         * @deprecated
        */
        abstract entry(): void;
        abstract trace(message: string, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "log(org.apache.logging.log4j.Level,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(level: org.apache.logging.log4j.Level_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "info(java.lang.String,java.lang.Object)"(message: string, p0: any): void;
        abstract warn(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: any, throwable: Internal.Throwable_): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void;
        abstract "trace(org.apache.logging.log4j.message.Message,java.lang.Throwable)"(message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract fatal(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract warn(message: string, p0: any, p1: any, p2: any): void;
        abstract "info(java.lang.CharSequence,java.lang.Throwable)"(message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void;
        abstract traceExit<R>(message: org.apache.logging.log4j.message.Message_, result: R): R;
        abstract info(message: org.apache.logging.log4j.message.Message_): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, throwable: Internal.Throwable_): void;
        abstract debug(message: string, ...params: any[]): void;
        abstract trace(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract "log(org.apache.logging.log4j.Level,org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(level: org.apache.logging.log4j.Level_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String)"(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract warn(message: any, throwable: Internal.Throwable_): void;
        abstract "error(org.apache.logging.log4j.util.MessageSupplier)"(messageSupplier: Internal.MessageSupplier_): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.Object,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any): void;
        abstract debug(message: any, throwable: Internal.Throwable_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract debug(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.String)"(marker: org.apache.logging.log4j.Marker_, message: string): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: string, ...params: any[]): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract fatal(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any): void;
        abstract error(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract error(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract trace(message: string, p0: any, p1: any): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract "fatal(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any): void;
        abstract "trace(java.lang.CharSequence)"(message: Internal.CharSequence_): void;
        abstract "warn(java.lang.CharSequence)"(message: Internal.CharSequence_): void;
        abstract log(level: org.apache.logging.log4j.Level_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,org.apache.logging.log4j.util.Supplier[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...paramSuppliers: org.apache.logging.log4j.util.Supplier_<any>[]): void;
        abstract fatal(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract info(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract "debug(org.apache.logging.log4j.util.MessageSupplier,java.lang.Throwable)"(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "error(java.lang.String,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any): void;
        abstract "error(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.MessageSupplier)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: Internal.MessageSupplier_): void;
        abstract "trace(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any): void;
        abstract "warn(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_): void;
        abstract "fatal(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.Marker,org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract debug(message: string, p0: any, p1: any, p2: any): void;
        abstract "trace(java.lang.String,java.lang.Throwable)"(message: string, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object[])"(marker: org.apache.logging.log4j.Marker_, message: string, ...params: any[]): void;
        abstract "info(org.apache.logging.log4j.Marker,org.apache.logging.log4j.message.Message,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract "info(org.apache.logging.log4j.Marker,java.lang.CharSequence,java.lang.Throwable)"(marker: org.apache.logging.log4j.Marker_, message: Internal.CharSequence_, throwable: Internal.Throwable_): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: any, throwable: Internal.Throwable_): void;
        abstract "warn(org.apache.logging.log4j.util.Supplier,java.lang.Throwable)"(messageSupplier: org.apache.logging.log4j.util.Supplier_<any>, throwable: Internal.Throwable_): void;
        abstract warn(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract "debug(org.apache.logging.log4j.Marker,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: any): void;
        abstract debug(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract fatal(message: string, throwable: Internal.Throwable_): void;
        abstract "error(java.lang.Object,java.lang.Throwable)"(message: any, throwable: Internal.Throwable_): void;
        abstract fatal(message: any): void;
        abstract log(level: org.apache.logging.log4j.Level_, message: org.apache.logging.log4j.message.Message_): void;
        abstract info(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "fatal(org.apache.logging.log4j.Marker,java.lang.String,java.lang.Object,java.lang.Object)"(marker: org.apache.logging.log4j.Marker_, message: string, p0: any, p1: any): void;
        abstract trace(marker: org.apache.logging.log4j.Marker_, message: org.apache.logging.log4j.message.Message_, throwable: Internal.Throwable_): void;
        abstract trace(message: Internal.CharSequence_): void;
        abstract warn(messageSupplier: Internal.MessageSupplier_, throwable: Internal.Throwable_): void;
        abstract "debug(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void;
        abstract "info(java.lang.String,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object,java.lang.Object)"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void;
        abstract error(message: any): void;
        abstract error(message: string, throwable: Internal.Throwable_): void;
        get level(): org.apache.logging.log4j.Level
        get name(): string
        get traceEnabled(): boolean
        get messageFactory(): MF
        get errorEnabled(): boolean
        get infoEnabled(): boolean
        get fatalEnabled(): boolean
        get debugEnabled(): boolean
        get warnEnabled(): boolean
    }
    type Logger_ = Logger;
}
declare namespace com.google.gson.reflect {
    class TypeToken <T> {
        static get<T>(arg0: T): com.google.gson.reflect.TypeToken<T>;
        getClass(): typeof any;
        /**
         * @deprecated
        */
        isAssignableFrom(arg0: Internal.Type_): boolean;
        toString(): string;
        /**
         * @deprecated
        */
        isAssignableFrom(arg0: com.google.gson.reflect.TypeToken_<any>): boolean;
        static getParameterized(arg0: Internal.Type_, ...arg1: Internal.Type_[]): com.google.gson.reflect.TypeToken<any>;
        notifyAll(): void;
        static getArray(arg0: Internal.Type_): com.google.gson.reflect.TypeToken<any>;
        static get(arg0: Internal.Type_): com.google.gson.reflect.TypeToken<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getRawType(): T;
        static "get(java.lang.reflect.Type)"(arg0: Internal.Type_): com.google.gson.reflect.TypeToken<any>;
        hashCode(): number;
        /**
         * @deprecated
        */
        "isAssignableFrom(java.lang.Class)"(arg0: typeof any): boolean;
        wait(): void;
        /**
         * @deprecated
        */
        "isAssignableFrom(java.lang.reflect.Type)"(arg0: Internal.Type_): boolean;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        isAssignableFrom(arg0: typeof any): boolean;
        equals(arg0: any): boolean;
        getType(): Internal.Type;
        /**
         * @deprecated
        */
        "isAssignableFrom(com.google.gson.reflect.TypeToken)"(arg0: com.google.gson.reflect.TypeToken_<any>): boolean;
        static "get(java.lang.Class)"<T>(arg0: T): com.google.gson.reflect.TypeToken<T>;
        get class(): typeof any
        get rawType(): T
        get type(): Internal.Type
    }
    type TypeToken_<T> = TypeToken<T>;
}
